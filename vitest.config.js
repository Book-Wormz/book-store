import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    // enables global fxns (describe, it, expect). without this setting, these fxns would have to be imported into every test file.
    environment: "jsdom",
    // sets up a simulated browser environment
  },
});
