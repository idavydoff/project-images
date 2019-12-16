const { override, addDecoratorsLegacy, disableEsLint } = require("customize-cra");

module.exports = override(
    addDecoratorsLegacy(), // enable legacy decorators babel plugin
    disableEsLint() // disable eslint in webpack
);