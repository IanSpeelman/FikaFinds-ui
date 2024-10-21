import { defineConfig } from 'vitest/config';
import react from "@vitejs/plugin-react"
console.log("config loaded")

export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        globals: true,
        css: true,
        include: ['**/*.test.ts', '**/*.test.tsx', '**/*.spec.ts', '**/*.spec.tsx']
    },
});
