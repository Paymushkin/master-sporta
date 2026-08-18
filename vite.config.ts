import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import { google } from 'laravel-vite-plugin/fonts';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.ts'],
            refresh: true,
            fonts: [
                google('Oswald', {
                    weights: [500, 600],
                    subsets: ['latin', 'cyrillic', 'cyrillic-ext'],
                    display: 'swap',
                    fallbacks: ['Arial', 'sans-serif'],
                    optimizedFallbacks: false,
                }),
                google('Inter', {
                    weights: [400, 500, 600, 700],
                    subsets: ['latin', 'cyrillic', 'cyrillic-ext'],
                    display: 'swap',
                    fallbacks: ['Arial', 'sans-serif'],
                    optimizedFallbacks: false,
                }),
            ],
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./resources/js', import.meta.url)),
        },
    },
    server: {
        watch: {
            usePolling: true,
            ignored: ['**/storage/framework/views/**'],
        },
    },
});
