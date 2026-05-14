import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sant-jaume.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/calderes-biomassa-osona`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/escuraxemeneies`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/inserts-llenya`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/desbrossaments-boscos-osona`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/instalacio-caldera-ferroli-osona`,
      lastModified: new Date(),
    },
  ];
}
