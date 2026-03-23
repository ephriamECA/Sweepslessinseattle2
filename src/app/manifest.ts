import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sweepsless in Seattle",
    short_name: "Sweepsless",
    description:
      "Professional house cleaning in Seattle and the Eastside. No contracts, vetted teams, flexible scheduling.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf8f5",
    theme_color: "#8a6d2f",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
