import { XMLParser } from 'fast-xml-parser';

export interface ArxivPaper {
  id: string;
  title: string;
  summary: string;
  published: string;
  authors: string[];
  pdfUrl: string;
}

export async function getLatestPapers(query: string, limit: number = 5): Promise<ArxivPaper[]> {
  try {
    const encodedQuery = encodeURIComponent(`all:"${query}"`);
    const url = `https://export.arxiv.org/api/query?search_query=${encodedQuery}&start=0&max_results=${limit}&sortBy=submittedDate&sortOrder=descending`;
    
    const response = await fetch(url, { 
      next: { revalidate: 3600 },
      headers: {
        'User-Agent': 'Atlas-Interactive-Universe/1.0'
      }
    }); // Cache for 1 hour
    
    if (!response.ok) {
      console.error(`Failed to fetch from arXiv API: ${response.status} ${response.statusText}`);
      console.error(`URL: ${url}`);
      return [];
    }

    const xmlData = await response.text();
    
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "@_"
    });
    const parsedData = parser.parse(xmlData);

    const entries = parsedData.feed?.entry;
    
    if (!entries) {
      return [];
    }

    // Ensure entries is always an array (if only 1 result, fast-xml-parser might return an object)
    const entryArray = Array.isArray(entries) ? entries : [entries];

    return entryArray.map((entry: any) => {
      // Authors can be a single object or an array
      let authorsList: string[] = [];
      if (entry.author) {
        if (Array.isArray(entry.author)) {
          authorsList = entry.author.map((a: any) => a.name);
        } else {
          authorsList = [entry.author.name];
        }
      }

      // Find the PDF link
      let pdfUrl = '';
      if (entry.link) {
        const links = Array.isArray(entry.link) ? entry.link : [entry.link];
        const pdfLink = links.find((l: any) => l['@_title'] === 'pdf' || l['@_type'] === 'application/pdf');
        pdfUrl = pdfLink ? pdfLink['@_href'] : entry.id;
      } else {
        pdfUrl = entry.id;
      }

      return {
        id: entry.id,
        title: entry.title.replace(/\n/g, ' ').trim(),
        summary: entry.summary.replace(/\n/g, ' ').trim(),
        published: entry.published,
        authors: authorsList,
        pdfUrl: pdfUrl
      };
    });
  } catch (error) {
    console.error('Error fetching arXiv data:', error);
    return [];
  }
}
