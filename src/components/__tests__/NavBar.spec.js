import { mount } from "@cypress/vue"
import NavBar from "../NavBar.vue"

describe("NavBar.vue", () => {
	it("renders top navigation", () => {
		mount(NavBar)
		cy.get("nav").should("have.class", "navigation")
		cy.contains("My account").click({ force: true })
	})
})
