import { NextResponse } from 'next/server';
import { getAllDocuments } from '@/lib/mdx';

export async function GET() {
  const docs = getAllDocuments();
  // Strip full content to save bandwidth, only send frontmatter, slug, category
  const searchIndex = docs.map(doc => ({
    slug: doc.slug,
    category: doc.category,
    title: doc.frontmatter.title,
    subtitle: doc.frontmatter.subtitle
  }));
  
  return NextResponse.json(searchIndex);
}
