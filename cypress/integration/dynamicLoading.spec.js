describe('Hello World is shown when the loading bar disappears', () => {
    it('Navigates to the test page', () => {
      cy.visit('https://the-internet.herokuapp.com')
      cy.get('a[href="/dynamic_loading"]')
        .should('exist')
        .click()
      cy.get('h3')
        .contains('Dynamically Loaded Page Elements')
        .should('be.visible')
      cy.get('a[href="/dynamic_loading/2"]')
        .should('exist')
        .click()
    })
    it('Clicks the Start button', () => {
      cy.get('button')
        .contains('Start')
        .should('be.visible')
        .click()
    })
    it('Waits for the loading bar to finish', () => {
        cy.get('#loading')
          .should('be.visible')
        cy.get('#loading', { timeout: 10000 })
          .should('not.be.visible')
    })
    it('Checks the Hello World! message is shown', () => {
        cy.get('h4')
          .contains('Hello World')
          .should('be.visible')
    })
})