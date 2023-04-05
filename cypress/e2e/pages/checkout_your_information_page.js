export class CheckoutYourInformationPage {

    first_name_textbox = '#first-name'
    last_name_textbox = '#last-name'
    postcode_textbox = '#postal-code'
    continue_button = '#continue'
    billing_information_error_message = '.error-message-container'

    enterFirstName(firstName) {
        if (firstName) {
            cy.get(this.first_name_textbox).type(firstName)
        }
    }

    enterLastName(lastName) {
        if (lastName) {
            cy.get(this.last_name_textbox).type(lastName)
        }
    }

    enterPostcode(postcode) {
        if (postcode) {
            cy.get(this.postcode_textbox).type(postcode)
        }
    }

    clickContinue() {
        cy.get(this.continue_button).click()
    }

    showErrorMessage(message) {
        cy.get(this.billing_information_error_message)
            .should('contain', message)
            .and('be.visible')
    }

}