import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import './common_steps'
import { LoginPage } from "../pages/login_page"

import logincredentials from '../../fixtures/login_credentials.json'
import errorMessages from '../../fixtures/error_messages.json'

var loginPage = new LoginPage

Given('I am on the Swag Labs login page', () => {
    cy.visitLoginPage()
})

When("I enter {string} credentials", (credentialType) => {
    loginPage.enterUsername(logincredentials[credentialType].username)
    loginPage.enterPassword(logincredentials[credentialType].password)
  });

When("I enter {string} username credentials", (credentialType) => {
    loginPage.enterUsername(logincredentials[credentialType].username)
})

When("I enter {string} password credentials", (credentialType) => {
    loginPage.enterPassword(logincredentials[credentialType].password)
})

When('I click the login button', () => {
    loginPage.clickLogin()
})

Then("I should see the {string} login error message", (errorMessage) => {
    loginPage.showErrorMessage(errorMessages.login_errors[errorMessage])
})