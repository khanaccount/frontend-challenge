import { reactRouter } from "@react-router/dev/vite";

import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    build: {
        outDir: "dist",
    },
    server: {
        // Specify the development server port
        port: 3001,
    },
    // Base name of your app
    base: "/",
    plugins: [reactRouter(), tsconfigPaths()],
});
