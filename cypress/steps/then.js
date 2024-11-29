class Then {

    seePostPublishedPostWithContent(data){
        cy.visit(Cypress.env('postPagePublishedUrl'));
    }

    seeSettings(data, stage){
        cy.visit(Cypress.env('baseUrl') + '/ghost/#/settings');
        //cy.contains(data).should('exist');
    }

}

export default new Then();