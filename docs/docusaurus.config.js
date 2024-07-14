// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Desygna",
  tagline: "Makes styling components easier",
  url: "https://desygna.vercel.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/desygna_icon.png",
  organizationName: "desygna",
  projectName: "desygna",
  i18n: {
    defaultLocale: "en",
    locales: ["en"]
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/desygna/desygna/tree/main/docs",
          remarkPlugins: [
            [require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }]
          ],
          lastVersion: "current",
          versions: {
            current: {
              label: "4.x.x (latest)",
              path: "v4"
            },
            "3.0.0": {
              label: "3.x.x",
              path: "v3",
              banner: "unmaintained",
              noIndex: true
            }
          }
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Desygna",
        logo: {
          alt: "Desygna",
          src: "img/desygna_icon.png",
          style: {
            borderRadius: "99px"
          }
        },
        items: [
          {
            type: "docsVersionDropdown"
          },
          {
            href: "https://github.com/desygna/desygna",
            label: "GitHub",
            position: "right"
          }
        ]
      },
      footer: {
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Installation",
                to: "/docs/v4/installation"
              },
              {
                label: "Examples",
                to: "https://github.com/desygna/desygna-examples"
              }
            ]
          },
          {
            title: "Links",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/desygna/desygna"
              }
            ]
          }
        ]

        // copyright: `Copyright © ${new Date().getFullYear()} Desygna - Makes styling components easier.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    })
};

module.exports = config;
