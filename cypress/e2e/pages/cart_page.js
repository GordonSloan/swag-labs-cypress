export class CartPage {

    cart_item_label = '.cart_item_label'
    cart_quantity = '.cart_quantity'
    remove_button = '.btn_secondary'
    checkout_button = '#checkout'

    verifyCartItemName(itemName) {
        cy.get(this.cart_item_label).should('contain', itemName)
    }

    verifyCartItemQuntityByName(itemName, itemQuantity) {
        cy.get(this.cart_item_label).contains(itemName).parent().parent().find(this.cart_quantity).should('have.text', itemQuantity.toString())
    }

    removeFromCart(itemName) {
        cy.get(this.cart_item_label).contains(itemName).parent().parent().find(this.remove_button).click()
    }

    verifyItemNotInCart(item) {
        cy.get(this.cart_item_label).should('not.contain', item)
    }

    clickCheckout() {
        cy.get(this.checkout_button).click()
    }

}