import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jandbjunkremoval.com";
  const routes = [
    "",
    "/services",
    "/how-it-works",
    "/pricing",
    "/before-after",
    "/service-areas",
    "/about",
    "/faq",
    "/contact",
    "/get-a-quote",
    "/privacy-policy",
    "/terms-and-conditions",
    "/cookie-policy",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/get-a-quote" ? 0.9 : 0.8,
  }));
}
