import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import './common_steps'
import { ProductsPage } from "../pages/products_page"
import { CartPage } from "../pages/cart_page"
import { CheckoutYourInformationPage } from "../pages/checkout_your_information_page"
import { CheckoutOverviewPage } from "../pages/checkout_overview_page"
import { CheckoutCompletePage } from "../pages/checkout_complete_page"

import errorMessages from '../../fixtures/error_messages.json'

var productsPage = new ProductsPage
var cartPage = new CartPage
var checkoutYourInformationPage = new CheckoutYourInformationPage
var checkoutOverviewPage = new CheckoutOverviewPage
var checkoutCompletePage = new CheckoutCompletePage

Given('the following items are in my cart:', (dataTable) => {
    dataTable.hashes().forEach(row => {
        productsPage.addProductToCart(row.product)
    })
})

When('I click the "Checkout" button', () => {
    cartPage.clickCheckout()
})

When('I click the "Continue" button', () => {
    checkoutYourInformationPage.clickContinue()
})

When('I click the "Finish" button', () => {
    checkoutOverviewPage.clickFinish()
})

When('I enter the billing information:', (dataTable) => {
    dataTable.hashes().forEach(row => {
        const defaults = {
            firstName: () => null,
            lastName: () => null,
            postcode: () => null,
        };
        const { firstName, lastName, postcode } = Object.assign({}, defaults, row)

        checkoutYourInformationPage.enterFirstName(firstName)
        checkoutYourInformationPage.enterLastName(lastName)
        checkoutYourInformationPage.enterPostcode(postcode)
    })
})

Then('the checkout complete message should be displayed:', (dataTable) => {
    checkoutCompletePage.verifySuccessImage()
    dataTable.hashes().forEach(row => {
        checkoutCompletePage.verifyCompleteHeader(row.title)
        checkoutCompletePage.verifyCompleteText(row.text)
    })
})

Then('the overview should contain the following items:', (dataTable) => {
    dataTable.hashes().forEach(row => {
        checkoutOverviewPage.verifyItemQuantityByName(row.product, row.qty)
    })
})

Then('the price totals should be:', (dataTable) => {
    dataTable.hashes().forEach(row => {
        checkoutOverviewPage.verifySubtotal(row.itemTotal)
        checkoutOverviewPage.verifyTax(row.tax)
        checkoutOverviewPage.verifyTotal(row.total)
    })
})

Then('I should see the {string} billing error message', (errorMessage) => {
    checkoutYourInformationPage.showErrorMessage(errorMessages.billing_information_errors[errorMessage])
})