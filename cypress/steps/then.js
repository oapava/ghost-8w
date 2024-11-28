class Then{
    validatePageWasCreatedTitle(title){
        cy.contains(title).should('exist');
        cy.screenshot('17/p1-/p4-pagina-creada');
    }
}

export default new Then();