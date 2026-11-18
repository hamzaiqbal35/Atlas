import { getAllDocuments } from "@/lib/mdx";
import { getCategoryBySlug, CATEGORIES } from "@/lib/categories";
import { notFound } from "next/navigation";
import CategoryIndexClient, { SerializedDoc } from "./CategoryIndexClient";

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({
    category: cat.slug,
  }));
}

export default async function CategoryIndexPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const resolvedParams = await params;
  const categoryMeta = getCategoryBySlug(resolvedParams.category);

  if (!categoryMeta) {
    notFound();
  }

  const categoryIndex = CATEGORIES.findIndex((c) => c.slug === categoryMeta.slug);

  // Get all documents and filter by category
  const allDocs = getAllDocuments();
  const categoryDocs = allDocs.filter(
    (doc) => doc.category.toLowerCase() === resolvedParams.category.toLowerCase()
  );

  const ignoredKeys = new Set(['title', 'subtitle', 'category', 'hide_hero', 'description']);

  const serializedDocs: SerializedDoc[] = categoryDocs.map((doc) => {
    const specs: { label: string; value: string }[] = [];
    if (doc.frontmatter) {
      for (const [key, val] of Object.entries(doc.frontmatter)) {
        if (!ignoredKeys.has(key) && val && typeof val === 'string' && val !== 'N/A' && val !== 'Unknown') {
          specs.push({
            label: key.replace(/_/g, ' '),
            value: val,
          });
          if (specs.length >= 2) break;
        }
      }
    }

    return {
      slug: doc.slug,
      category: doc.category,
      title: doc.frontmatter.title || doc.slug,
      subtitle: doc.frontmatter.subtitle || '',
      specs,
    };
  });

  const iconName = categoryMeta.icon?.displayName || categoryMeta.icon?.name || 'Globe';

  return (
    <CategoryIndexClient 
      categorySlug={categoryMeta.slug}
      categoryTitle={categoryMeta.title}
      categoryDescription={categoryMeta.description}
      categoryColor={categoryMeta.color}
      categoryIconName={iconName}
      categoryIndex={categoryIndex !== -1 ? categoryIndex : 0}
      totalCategories={CATEGORIES.length}
      subcategories={categoryMeta.subcategories || []}
      docs={serializedDocs}
    />
  );
}
