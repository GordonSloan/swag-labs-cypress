export class CheckoutCompletePage {

    success_image = '.pony_express'
    complete_header = '.complete-header'
    complete_text = '.complete-text'

    verifySuccessImage() {
        cy.get(this.success_image)
            .should('be.visible')
    }

    verifyCompleteHeader(text) {
        cy.get(this.complete_header)
            .should('be.visible')
            .and('contain', text)
    }

    verifyCompleteText(text) {
        cy.get(this.complete_text)
            .should('be.visible')
            .and('contain', text)
    }

}