/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: "category",
      label: "Desygna",
      collapsed: false,
      items: ["desygna/introduction", "desygna/contributing"]
    },
    {
      type: "doc",
      id: "getting-started/migrating",
      label: "Migration Guide"
    },
    {
      type: "category",
      label: "Getting Started",
      collapsed: false,
      items: ["getting-started/installation", "getting-started/theming"]
    },
    {
      type: "category",
      label: "Styled API",
      collapsed: false,
      items: ["getting-started/styled-api"]
    },
    {
      type: "category",
      label: "System",
      collapsed: false,
      items: [
        "system/introduction",
        "system/animation",
        "system/background",
        "system/border",
        "system/color",
        "system/cursor",
        "system/flexbox",
        "system/grid",
        "system/layout",
        "system/position",
        "system/shadow",
        "system/space",
        "system/typography"
      ]
    },
    {
      type: "category",
      label: "Utilities",
      collapsed: false,
      items: ["utilities/compose", "utilities/compose-all", "utilities/variant"]
    },
    {
      type: "category",
      label: "Examples",
      collapsed: false,
      items: [
        {
          type: "link",
          label: "Vite + Desygna v4",
          href: "https://github.com/desygna/desygna-v4-vite-example"
        }
      ]
    }
  ]
};

module.exports = sidebars;
