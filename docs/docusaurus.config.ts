import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
  title: "amen Share X",
  tagline:
    "amen Share X is a self-hosted file sharing platform and an alternative for WeTransfer.",
  favicon: "img/amenshare.svg",

  url: "https://amen-edu.github.io",
  baseUrl: "/amen-share-x/",
  organizationName: "amen-edu",
  projectName: "amen-share-x",

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/amen-edu/amen-share-x/edit/main/docs",
        },
        blog: false,
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/amenshare.svg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "amen Share X",
      logo: {
        alt: "amen Share Logo",
        src: "img/amenshare.svg",
      },
      items: [
        {
          href: "https://github.com/amen-edu/amen-share-x",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
