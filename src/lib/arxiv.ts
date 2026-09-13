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
    const encodedQuery = encodeURIComponent(query);
    // Use CrossRef API as it doesn't block cloud IPs and returns JSON directly
    const url = `https://api.crossref.org/works?query=${encodedQuery}&select=title,author,abstract,URL,created&rows=${limit}&sort=created`;
    
    const response = await fetch(url, { 
      next: { revalidate: 3600 },
      headers: {
        'User-Agent': 'Atlas-Interactive-Universe/1.0 (mailto:hello@example.com)'
      }
    });
    
    if (!response.ok) {
      console.error(`Failed to fetch from CrossRef API: ${response.status} ${response.statusText}`);
      return [];
    }

    const data = await response.json();
    const items = data.message?.items;
    
    if (!items || !Array.isArray(items)) {
      return [];
    }

    return items.map((item: any) => {
      // Authors can be missing or in a different format
      let authorsList: string[] = [];
      if (item.author && Array.isArray(item.author)) {
        authorsList = item.author.map((a: any) => `${a.given || ''} ${a.family || ''}`.trim()).filter(Boolean);
      }
      
      // Clean up abstract (often contains HTML tags like <p> or <jats:p>)
      let abstract = item.abstract || '';
      abstract = abstract.replace(/<[^>]*>?/gm, '').trim();
      if (!abstract) abstract = 'No abstract available.';

      const title = item.title && item.title[0] ? item.title[0] : 'Untitled';
      const url = item.URL || '';
      const published = item.created ? item.created['date-time'] : new Date().toISOString();

      return {
        id: url || title,
        title: title,
        summary: abstract,
        published: published,
        authors: authorsList.length > 0 ? authorsList : ['Unknown Author'],
        pdfUrl: url
      };
    }).filter((p: ArxivPaper) => p.pdfUrl); // Only return papers with a URL
  } catch (error) {
    console.error('Error fetching CrossRef data:', error);
    return [];
  }
}
