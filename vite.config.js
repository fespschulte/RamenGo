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
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
})
