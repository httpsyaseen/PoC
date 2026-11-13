const nextCoreWebVitals = require("eslint-config-next/core-web-vitals");
const nextTypescript = require("eslint-config-next/typescript");
const eslintConfigPrettier = require("eslint-config-prettier");

module.exports = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  eslintConfigPrettier,
  {
    ignores: ["coverage/**"],
  },
];
