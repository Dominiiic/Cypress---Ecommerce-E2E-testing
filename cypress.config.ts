import { defineConfig } from "cypress";
import { registerArgosTask } from "@argos-ci/cypress/task";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      registerArgosTask(on, config, {
        // Enable upload to Argos only when it runs on CI.
        uploadToArgos: !!process.env.CI,
        // Set your Argos token (required only if you don't use GitHub Actions).
        token: "argos_9a34e0097bb4948b4e3e7b642d4308596a",
      });
    },
  },
});
