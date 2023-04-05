export class CheckoutOverviewPage {

    cart_item = '.cart_item'
    cart_quantity = '.cart_quantity'
    summary_subtotal_label = '.summary_subtotal_label'
    summary_tax_label = '.summary_tax_label'
    summary_total_label = '.summary_total_label'
    finish_button = '#finish'

    clickFinish() {
        cy.get(this.finish_button).click()
    }

    verifyItemQuantityByName(productName, quantity) {
        cy.get(this.cart_item).contains(productName).parent().parent().find(this.cart_quantity)
            .should('have.text', quantity.toString())
    }

    verifySubtotal(itemTotal) {
        cy.get(this.summary_subtotal_label)
            .should('contain', itemTotal)
    }

    verifyTax(tax) {
        cy.get(this.summary_tax_label)
            .should('contain', tax)
    }

    verifyTotal(total) {
        cy.get(this.summary_total_label)
            .should('contain', total)
    }

}