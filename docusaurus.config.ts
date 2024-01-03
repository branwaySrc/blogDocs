import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "mingimingi",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",
  url: "https://your-docusaurus-site.example.com",
  baseUrl: "/",
  organizationName: "branway",
  projectName: "mingimingi",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["kr"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "mingimingi",
      logo: {
        alt: "mingimingi logo",
        src: "img/profile.png",
      },
      items: [
        {
          href: "https://github.com/facebook/docusaurus",
          label: "GitHub",
          position: "right",
        },
        {
          type: "docSidebar",
          sidebarId: "react",
          position: "left",
          label: "React",
        },
        {
          type: "docSidebar",
          sidebarId: "javascript",
          position: "left",
          label: "Javascript",
        },
        {
          type: "docSidebar",
          sidebarId: "typescript",
          position: "left",
          label: "Typescript",
        },
        {
          type: "docSidebar",
          sidebarId: "docusaurus",
          position: "left",
          label: "Docusaurus",
        },
        {
          type: "docSidebar",
          sidebarId: "vocabularies",
          position: "left",
          label: "Vocabularies",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Other Docs",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} mingimingi!!`,
    },
    prism: {
      theme: prismThemes.vsDark,
      darkTheme: prismThemes.vsDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
