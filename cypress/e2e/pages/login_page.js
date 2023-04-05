export class LoginPage {

    username_textbox = '#user-name'
    password_textbox = '#password'
    login_button = '#login-button'
    login_error_message = '.error-message-container'

    enterUsername(username) {
        cy.get(this.username_textbox).type(username)
    }

    enterPassword(password) {
        cy.get(this.password_textbox).type(password)
    }

    clickLogin() {
        cy.get(this.login_button).click()
    }

    showErrorMessage(message) {
        cy.get(this.login_error_message)
            .should('contain', message)
            .and('be.visible')
    }

}

