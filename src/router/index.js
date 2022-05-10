import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: () => import("../views/HomeView.vue"),
		},
		{
			path: "/category/:slug/:page?",
			name: "category",
			component: () => import("../views/CategoryView.vue"),
		},
		{
			path: "/product/:slug",
			name: "product",
			component: () => import("../views/ProductView.vue"),
		},
	],
})

router.beforeEach(() => {
	window.scrollTo(0, 0)
})

export default router
