class Given{
    givenLogin(){
        cy.session('ghost-session', () => {
            cy.visit(Cypress.env('baseUrl') + '/ghost/#/signin');
            cy.get(this.inputEmail).type(Cypress.env('email'), { force: true });
            cy.get(this.inputPass).type(Cypress.env('password'), { force: true });
            cy.screenshot('5/init/p2_login');
            cy.get(this.buttonSignIn).click();
            cy.wait(500);
        });
    };

    givenNavigateDashboard(){
        cy.visit(Cypress.env('baseUrl') + '/ghost/#/dashboard');
        cy.url().should('include', '/ghost/#/dashboard');
        cy.screenshot('5/init/p3_dashboard');
    }

    givenLoadPoolData(){
        cy.fixture('post.fixtures.json').as('fixturePost');
        cy.fixture('design.fixtures.json').as('fixtureDesign');
        cy.fixture('navigation.fixtures.json').as('fixtureNavigation');
    }
}