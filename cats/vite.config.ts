import { reactRouter } from "@react-router/dev/vite";

import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    build: {
        outDir: "dist",
    },
    server: {
        port: 3000,
    },
    // Base name of your app
    base: "/",
    plugins: [reactRouter(), tsconfigPaths()],
});
