import { mount } from "@cypress/vue"
import ProductThumb from "../ProductThumb.vue"

describe("ProductThumb.vue", () => {
	it("renders product thumbnail/card", () => {
		mount(ProductThumb, {
			props: {
				product: {
					uid: "MzQ3Nw==",
					name: "Thick Leather Braided Belt",
					thumbnail: {
						url: "https://jnz3dtiuj77ca.dummycachetest.com/media/catalog/product/cache/6e1cf7b8bcbe772e1a0e2f5447e60359/v/a/va08-br_main.jpg",
					},
					url_key: "thick-leather-braided-belt",
					price_range: {
						minimum_price: {
							regular_price: {
								currency: "USD",
								value: 48,
							},
						},
					},
				},
			},
		})
		cy.get(".product-thumb__image")
			.should("be.visible")
			.and($img => {
				expect($img[0].naturalWidth).to.be.greaterThan(0)
			})

		cy.get(".product-thumb__price").contains("USD")
	})
})
