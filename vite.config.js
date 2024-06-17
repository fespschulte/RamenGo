import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    base: '/RamenGo/',
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
            },
        },
    },
    server: {
        proxy: {
            '/api': {
                target: 'https://api.tech.redventures.com.br',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
})
