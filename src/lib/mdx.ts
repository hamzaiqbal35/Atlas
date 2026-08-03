import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface MDXDocument {
  slug: string;
  category: string;
  frontmatter: Record<string, any>;
  content: string;
}

export function getMdxFiles(dir: string): string[] {
  let results: string[] = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getMdxFiles(filePath));
    } else if (file.endsWith('.mdx')) {
      results.push(filePath);
    }
  });
  return results;
}

export function getDocumentBySlug(category: string, slug: string): MDXDocument | null {
  try {
    const fullPath = path.join(contentDirectory, category, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    return {
      slug,
      category,
      frontmatter: data,
      content,
    };
  } catch (e) {
    return null;
  }
}

export function getAllDocuments(): MDXDocument[] {
  if (!fs.existsSync(contentDirectory)) return [];
  const files = getMdxFiles(contentDirectory);
  return files.map((filePath) => {
    const relativePath = path.relative(contentDirectory, filePath);
    const parts = relativePath.split(path.sep);
    const category = parts[0];
    const slug = parts[parts.length - 1].replace(/\.mdx$/, '');
    
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    return {
      slug,
      category,
      frontmatter: data,
      content,
    };
  });
}
