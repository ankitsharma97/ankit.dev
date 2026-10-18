import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://ankit.is-a.dev";

export default function sitemap(): MetadataRoute.Sitemap {
    return ["", "/projects", "/skills", "/experience", "/about", "/contact"].map((path) => ({
        url: `${siteUrl}${path}`,
        lastModified: new Date(),
    }));
}
