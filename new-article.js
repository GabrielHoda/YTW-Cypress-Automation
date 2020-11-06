describe('New article test', () => {
    it('Logs in', () => {
        //intra pe pagina
        cy.visit("https://angular.realworld.io/")

        //click pe sign in
        cy.contains("Sign in").click()

        //introduce user si parola
        cy.get("body > app-root > app-auth-page > div > div > div > div > form > fieldset > fieldset:nth-child(2) > input").type("ytwuser4@mail.com")
        cy.get("body > app-root > app-auth-page > div > div > div > div > form > fieldset > fieldset:nth-child(3) > input").type("YTWPass4")
        cy.get("body > app-root > app-auth-page > div > div > div > div > form > fieldset > button").click()

    })
    it('Creates new Article', () => {
        cy.contains("New Article").click()

        cy.get("body > app-root > app-editor-page > div > div > div > div > form > fieldset > fieldset:nth-child(1) > input").type("Titlu").should('have.value', "About")
        cy.get("body > app-root > app-editor-page > div > div > div > div > form > fieldset > fieldset:nth-child(2) > input").type("About")
        cy.get("body > app-root > app-editor-page > div > div > div > div > form > fieldset > fieldset:nth-child(3) > textarea").type("Body")
        cy.get("body > app-root > app-editor-page > div > div > div > div > form > fieldset > fieldset:nth-child(4) > input")
            .type("YTW{enter}")

        cy.get('body > app-root > app-editor-page > div > div > div > div > form > fieldset > button').click()
    })
})