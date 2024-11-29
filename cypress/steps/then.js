class Then {

    seePostPublishedPostWithContent(data){
        cy.visit(Cypress.env('postPagePublishedUrl'));
        cy.contains(data.post.title).should('exist');
    }

    seeSettingsTitle(data, stage){
        cy.visit(Cypress.env('baseUrl') + '/ghost/#/settings');
        cy.contains(data.settings.siteTitle).should('exist');
    }

    seeSettingsSocialAcounts(data, stage){
        cy.visit(Cypress.env('baseUrl') + '/ghost/#/settings');
        cy.contains(data.socialAccounts.urlFacebook).should('exist');
    }

    seeSettingsError(data, stage){
        cy.visit(Cypress.env('baseUrl') + '/ghost/#/settings');
        cy.contains('is not a valid').should('exist');
    }

}

export default new Then();