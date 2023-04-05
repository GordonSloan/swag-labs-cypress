import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import './common_steps';
import { ProductsPage } from "../pages/products_page"
import { HeaderPage } from "../pages/header_page"
import { CartPage } from "../pages/cart_page"

var productsPage = new ProductsPage
var headerPage = new HeaderPage
var cartPage = new CartPage

When('I add the following items to my cart:', (dataTable) => {
    dataTable.hashes().forEach(row => {
        productsPage.addProductToCart(row.product)
    })
})

When('I remove the following items from my cart:', (dataTable) => {
    dataTable.hashes().forEach(row => {
        cartPage.removeFromCart(row.product)
    })
})

Then('the shopping cart badge value should be {int}', (value) => {
    headerPage.verifyShoppingCartBadgeValue(value)
})

Then('the following items should be in my cart:', (dataTable) => {
    dataTable.hashes().forEach(row => {
        cartPage.verifyCartItemName(row.product)
        cartPage.verifyCartItemQuntityByName(row.product, row.qty)
    })
})

Then('the item {string} should not be in my shopping cart', (item) => {
    cartPage.verifyItemNotInCart(item)
})