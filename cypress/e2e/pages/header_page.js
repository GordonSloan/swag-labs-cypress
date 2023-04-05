export class HeaderPage {

    shopping_cart_badge = '.shopping_cart_badge'
    shopping_cart_link = '.shopping_cart_link'

    verifyShoppingCartBadgeValue(value) {
        cy.get(this.shopping_cart_badge).should('have.text', value.toString())
    }

    clickShoppingCart() {
        cy.get(this.shopping_cart_link).click()
    }

}