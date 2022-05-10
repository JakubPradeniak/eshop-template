import { fileURLToPath, URL } from "url"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		proxy: {
			"/graphql": {
				target: "https://venia.magento.com/graphql",
				changeOrigin: true,
			},
		},
	},
	plugins: [vue()],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
})
