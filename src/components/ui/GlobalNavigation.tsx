"use client";

import { CATEGORIES } from "@/lib/categories";
import StaggeredMenu from "./StaggeredMenu";

export function GlobalNavigation() {
  const menuItems = [
    { label: "Home", link: "/", exact: true },
    { label: "The Atlas", link: "/explore", exact: true },
    { label: "Search", link: "#", ariaLabel: "Press Ctrl+K to search" }, // Or handle search differently
    ...CATEGORIES.map((cat) => ({
      label: cat.title,
      link: `/explore/${cat.slug}`,
      children: cat.subcategories?.map(sub => ({
        label: sub.title,
        link: `/explore/${cat.slug}/${sub.slug}`,
      })),
    })),
  ];

  return (
    <StaggeredMenu
      position="right"
      items={menuItems}
      displaySocials={false}
      displayItemNumbering={false}
      menuButtonColor="#ffffff"
      openMenuButtonColor="#ffffff"
      changeMenuColorOnOpen={false}
      colors={["#0a0a0a", "#1a1a1a"]} // Dark space theme
      accentColor="#3b82f6" // Primary blue accent
      isFixed={true}
    />
  );
}
