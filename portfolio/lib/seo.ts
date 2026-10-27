import type { Metadata } from "next";

export const SITE_NAME = "Nuraddinov Sarvarbek";

/** Keep search snippets and social previews specific to the current page. */
export function pageMetadata(title: string, description: string, path: string): Metadata {
  const fullTitle = `${title} — ${SITE_NAME}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      title: fullTitle,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "uz_UZ",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/opengraph-image"],
    },
  };
}
