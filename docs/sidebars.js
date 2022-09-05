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
      items: ["getting-started/installation"]
    }
  ]
};

module.exports = sidebars;
