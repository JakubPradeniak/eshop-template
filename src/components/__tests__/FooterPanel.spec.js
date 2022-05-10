import { mount } from "@cypress/vue"
import FooterPanel from "../FooterPanel.vue"

describe("FooterBlock.vue", () => {
	it("renders footer", () => {
		mount(FooterPanel)
		cy.get(".social-icons")
	})
})
