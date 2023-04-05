export class ProductDetailsPage {

    inventory_details_name = '.inventory_details_name'
    inventory_details_desc = '.inventory_details_desc'
    inventory_details_price = '.inventory_details_price'
    back_to_products_link = '#back-to-products'

    verifyProductName(productName) {
        cy.get(this.inventory_details_name).should('have.text', productName)
    }

    verifyProductDescription(productDescription) {
        cy.get(this.inventory_details_desc).should('have.text', productDescription)
    }

    verifyProductPrice(productPrice) {
        cy.get(this.inventory_details_price).should('have.text', productPrice)
    }

    clickBackToProducts() {
        cy.get(this.back_to_products_link).click()
    }

}