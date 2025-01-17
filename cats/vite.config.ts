import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
    base: "/",
    plugins: [react()],
    resolve: {
        alias: {
            components: path.resolve(__dirname, "src/components"),
            pages: path.resolve(__dirname, "src/pages"),
            styles: path.resolve(__dirname, "src/styles"),
            assets: path.resolve(__dirname, "src/assets"),
            hooks: path.resolve(__dirname, "src/hooks"),
            api: path.resolve(__dirname, "src/api"),
        },
    },
});
