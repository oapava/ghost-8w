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

    get settingsButton(){
        return 'a[data-test-nav="settings"]';
    }

    get buttonSignIn(){
        return 'button[data-test-button="sign-in"]';
    }

    get inputEmail(){
        return 'input[type="email"]';
    }

    get inputPass(){
        return 'input[type="password"]';
    }

    get settingsButton(){
        return 'a[data-test-nav="settings"]';
    }

    get createNewMemberButton(){
        return 'a[data-test-new-member-button="true"]';
    }

    navigateToPost(){
        cy.visit(Cypress.env('postPageUrl'));
    };



    givenNavigateToInitialPage(){
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        });
        cy.visit(Cypress.env('baseUrl') + '/ghost/#/signin');
        cy.get(this.buttonSignIn).should('exist');
        cy.screenshot('5/init/p1_initPage');
    };

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
        cy.fixture('mix-content.fixture.json').as('fixturePage');
        cy.fixture('members.fixture.json').as('fixtureMembers');
        cy.fixture('postButtons.json').as('postButtons');
        cy.fixture('htmlPost.json').as('postHtml');
        cy.fixture('mdPost.json').as('postMarkDown')
        cy.fixture('postProduct.json').as('postProduct');
        cy.fixture('postBadHTML.json').as('postBadHTML');
    }

    givenNavigateToPagePage(){
        cy.visit(Cypress.env('pageUrl'));
        cy.url().should('include', '/ghost/#/pages');
        cy.wait(500);
    };

    givenNavigateTomembers(){
        cy.visit(Cypress.env('mambersUrl'));
        cy.url().should('include', '/ghost/#/members');
    };

}

export default new Given();