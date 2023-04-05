import { Given, Then } from "cypress-cucumber-preprocessor/steps"
import { LoginPage } from "../pages/login_page"
import { HeaderPage } from "../pages/header_page"

import logincredentials from '../../fixtures/login_credentials.json'
import pages from '../../fixtures/pages.json'

var loginPage = new LoginPage
var headerPage = new HeaderPage

Given('I am logged in', () => {
    cy.visitLoginPage()
    loginPage.enterUsername(logincredentials.valid.username)
    loginPage.enterPassword(logincredentials.valid.password)
    loginPage.clickLogin()
})

Given('I am on the {string} page', (page) => {
    cy.verifyPageTitle(pages[page].title)
    cy.verifyPageURL(pages[page].url)
})

When('I click the shopping cart icon', () => {
    headerPage.clickShoppingCart()
})

Then('I should see the {string} page', (page) => {
    cy.verifyPageTitle(pages[page].title)
    cy.verifyPageURL(pages[page].url)
})

Then('I should not see the {string} page', (page) => {
    cy.verifyNotPageURL(pages[page].url)
})