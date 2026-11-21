import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import wails from "@wailsio/runtime/plugins/vite";
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        host: "127.0.0.1",
        // @ts-ignore
        port: Number(process.env.WAILS_VITE_PORT) || 9245,
        strictPort: true,
    },
    plugins: [
        react(),
        wails("./bindings"),
        tailwindcss(),
        svgr(),
    ],
    build: {
        chunkSizeWarningLimit: 1100
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
        }
    }
});
