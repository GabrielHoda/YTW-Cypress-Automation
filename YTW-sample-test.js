describe('Create new article test', () => {
    it('Logs in into the application', () => {
        cy.visit('https://angular.realworld.io/')
        cy.contains('Sign in').click()

        //Should be on the Sign In page
        cy.url().should('include', '/login')

        //type email and password in fields
        cy.get('input[formcontrolname="email"]')
            .type('ytwuser2@mail.com')
            .should('have.value', 'ytwuser2@mail.com')

        cy.get('input[formcontrolname="password"]')
            .type('YTWpassword2')
            .should('have.value', 'YTWpassword2')

        cy.get('button[type="submit"]')
            .click()


    }),
        it('Creates a New Article', () => {
            cy.contains('New Article').click()

            //Should be on the New Article page
            cy.url().should('include', '/editor')

            //type Article Title
            cy.get('input[formcontrolname="title"]')
                .type('YTW New Article')
                .should('have.value', 'YTW New Article')

            //type About information
            cy.get('input[formcontrolname="description"]')
                .type('This article is about nothing and everything at the same time')
                .should('have.value', 'This article is about nothing and everything at the same time')

            //type the article
            cy.get('textarea[formcontrolname="body"]')
                .type('This article has nothing to say and it will remain a mistery for the readers')
                .should('have.value', 'This article has nothing to say and it will remain a mistery for the readers')

            //type the tags 
            cy.get('input[placeholder="Enter tags"]')
                .type('YTW{enter}')


            cy.contains('Publish Article').click()

        })
})