export class ProductsPage {

    header_logo = '#header_container > div.primary_header > div.header_label > div'
    product_sort_container = '.product_sort_container'
    inventory_item_name = '.inventory_item_name'
    inventory_item_price = '.inventory_item_price'
    page_title = '.title'
    add_to_cart_button = '.btn_primary'

    showHeader(title) {
        cy.get(this.header_logo)
            .should('contain', title)
            .and('be.visible')
    }

    showPageTitle(title) {
        cy.get(this.page_title)
            .should('contain', title)
            .and('be.visible')
    }

    selectProductSort(option) {
        cy.get(this.product_sort_container).select(option)
    }

    clickItemName(productName) {
        cy.get(this.inventory_item_name).contains(productName).click()
    }

    verifyProductNameByIndex(index, productName) {
        cy.get(this.inventory_item_name).eq(index).should("have.text", productName)
    }

    verifyProductPriceByIndex(index, productPrice) {
        cy.get(this.inventory_item_price).eq(index).should("have.text", productPrice)
    }

    addProductToCart(productName) {
        cy.get(this.inventory_item_name).contains(productName).parent().parent().parent().find(this.add_to_cart_button).click()
    }    

}