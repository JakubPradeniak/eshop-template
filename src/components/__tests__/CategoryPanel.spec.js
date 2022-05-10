import { mount } from "@cypress/vue"
import CategoryPanel from "../CategoryPanel.vue"

describe("CategoryPanel.vue", () => {
	it("renders category panel on Homepage", () => {
		mount(CategoryPanel, {
			props: {
				category: {
					uid: "MTg=",
					name: "Tops",
					image: "https://jnz3dtiuj77ca.dummycachetest.com/media/catalog/category/outside.jpg",
					url_path: "venia-tops",
				},
			},
		})
		cy.get(".category-panel").should("have.attr", "style")
	})
})
