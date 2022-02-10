import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	publicDir: 'src/assets',
	build: {
		lib: {
			entry: 'src/main.tsx',
			name: 'index.js',
			fileName: 'index',
			formats: ['iife']
		}
	},
	server: {
		host: true
	}
});
