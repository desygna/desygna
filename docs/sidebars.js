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
      type: "category",
      label: "Getting Started",
      collapsed: false,
      items: ["getting-started/installation", "getting-started/styled-api"]
    },
    {
      type: "category",
      label: "System",
      collapsed: false,
      items: [
        "system/introduction",
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
      type: "html",
      value:
        "<div class='theme-doc-sidebar-item-category theme-doc-sidebar-item-category-level-1 menu__list-item menu__link'>Components <button class='desygna-sidebar-soon-button'>soon</button></div>",
      defaultStyle: true
    }
  ]
};

module.exports = sidebars;
