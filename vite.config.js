import { defineConfig } from 'vite'

export default defineConfig({
    root: './',
    build: {
        outDir: 'dist',
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
