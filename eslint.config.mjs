// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  rules: {
    // This will make error for Japanese traditional Full-width space.
    "no-irregular-whitespace": "off",
  },
});
