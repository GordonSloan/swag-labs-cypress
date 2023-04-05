import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import './common_steps'
import { ProductsPage } from "../pages/products_page"
import { ProductDetailsPage } from "../pages/product_details_page"

import products from '../../fixtures/products.json'

var productsPage = new ProductsPage
var productDetailsPage = new ProductDetailsPage

When('I select {string} from the sort by dropdown', (option) => {
    productsPage.selectProductSort(option)
})

When('I click the {string} product', (productName) => {
    productsPage.clickItemName(productName)
})

When('I click the Back to products link', () => {
    productDetailsPage.clickBackToProducts()
})

Then('products are displayed in the following order', (dataTable) => {
    dataTable.hashes().forEach(row => {
        const sortOrder = row.sortOrder - 1 // adjust index to start from 0
        productsPage.verifyProductNameByIndex(sortOrder, row.product)
        productsPage.verifyProductPriceByIndex(sortOrder, row.price)
    })
})

Then('I am on the product details page', () => {
    cy.verifyPageURL("/inventory-item.html")
})

Then('the product details for {string} should be displayed', (productName) => {
    const product = products.products.find(p => p.name === productName)
    productDetailsPage.verifyProductName(product.name)
    productDetailsPage.verifyProductDescription(product.description)
    productDetailsPage.verifyProductPrice(product.price)
})
