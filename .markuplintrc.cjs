module.exports = {
  parser: {
    ".astro$": "@markuplint/astro-parser",
  },
  extends: ["markuplint:recommended"],
  pretenders: [
    {
      selector: "List",
      as: "ul",
    },
    {
      selector: "Card",
      as: "li",
    },
  ],
};
