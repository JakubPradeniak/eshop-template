import { mount } from "@cypress/vue"
import NavbarContent from "../NavbarContent.vue"

describe("NavbarContent.vue", () => {
	it("renders navigation content for desktop", () => {
		mount(NavbarContent, {
			props: { mobileNav: false },
		})
		cy.get(".navigation__link--icon").should("not.contain", "Shopping bag")
	})

	it("renders navigation content for mobile devices", () => {
		mount(NavbarContent, {
			props: { mobileNav: true },
		})
		cy.contains("Shopping bag")
	})
})
