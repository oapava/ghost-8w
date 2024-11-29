class Given{

    get buttonSignIn(){
        return 'button[data-test-button="sign-in"]';
    }

    get inputEmail(){
        return 'input[type="email"]';
    }

    get inputPass(){
        return 'input[type="password"]';
    }
    
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

    givenNavigateToSettings(data, stage){
        cy.visit(Cypress.env('baseUrl') + '/ghost/#/settings');
        cy.url().should('include', 'settings');
        cy.screenshot(stage + '/p1_settings');
    }

    navigateToPostPage(data, stage){
        cy.visit(Cypress.env('postPageUrl'));
        cy.url().should('include', '/ghost/#/posts');
        cy.wait(500);
        cy.screenshot(stage + '/p4_postPage');
    };

    givenNavigateDashboard(){
        cy.visit(Cypress.env('baseUrl') + '/ghost/#/dashboard');
        cy.url().should('include', '/ghost/#/dashboard');
        cy.screenshot('5/init/p3_dashboard');
    }
}

export default new Given();