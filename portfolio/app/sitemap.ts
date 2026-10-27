import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/socials";

const routes = ["", "/about", "/projects", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    // Add lastModified only when an actual content-update date is available.
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
