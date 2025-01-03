class Then{
    get version(){
        return '5/'
    }

    get temporalFilePath(){
        return 'cypress/fixtures/tempData.json';
    }

    get errorAuthorPostText(){
        return 'At least one author is required.';
    }

    get urlPrevietext(){
        return 'p.ghost-url-preview';
    }

    get errorEcerptCharactersText(){
        return 'Excerpt cannot be longer than 300 characters.';
    }

    get mainScrollPost(){
        return '.gh-main';
    }

    get navigationOptionsContainer(){
        return 'div[data-testid="navigation"]';
    }

    get navigationItemSecondary(){
        return 'button[title="Secondary"]';
    }

    get emailContributorInput(){
        return 'input[placeholder="jamie@example.com"]';
    }

    get closePublishConfirmationButton(){
        return 'button[data-test-button="close-publish-flow"]';
    }

    get spanElement(){
        return 'span';
    }

    get pageListContainer(){
        return '.posts-list';
    }

    get alertCloseNotificationButton(){
        return 'button.gh-alert-close[data-test-button="close-notification"]';
    }

    get returnPost(){
        return 'a[data-test-link="posts"]';
    }

    get leaveButton(){
        return 'button.gh-btn.gh-btn-red[data-test-leave-button]';
    }

    get searchButton(){
        return 'button[data-test-button="search"]';
    }

    get searchInput(){
        return 'input[placeholder="Search site"]';
    }

    get buttonMemberList(){
        return 'a[data-test-nav="members"]'
    }

    get buttonleaveMemberCreatePage(){
        return 'button[data-test-leave-button]';
    }

    get pElement(){
        return 'p';
    }

    get errorResponse(){
        return 'p[class="response"]';
    }

    get postList(){
        return '.posts-list';
    }

    get listEmpty(){
        return 'div[class="gh-members-empty"]'
    }

    get tableMembers(){
        return 'div[data-test-table="members"]'
    }

    get publishComplete(){
        return 'div[data-test-publish-flow="complete"]'
    }

    get retrySaveButton(){
        return 'span[data-test-task-button-state="failure"]';
    }

    validatePageWasPublished( scenery ){
        cy.get( this.publishComplete ).should('exist');
        cy.contains( 'Your page is published.' ).should('exist');
        cy.screenshot( scenery + '/p3_pagina_guardada');
    }

    validatePostWasPublished(scenery){
        cy.wait(1000);
        cy.get('body').then(($body) => {
            if ($body.find(this.retrySaveButton).length > 0) {
              // Si encuentra el texto, ejecuta la acción
              cy.get(this.retrySaveButton).click();
            } else {
              // Si no encuentra el texto, simplemente continúa
              cy.log('El mensaje "Unknown Error" no apareció.');
            }
          });

        cy.get( this.publishComplete ).should('exist');
        cy.contains( 'published.' ).should('exist');
        cy.screenshot( this.version + scenery + '/p3_post_guardado');
    }



    validateMemberDoesNotExist(scenery){
        cy.contains( 'No members match the current filter' ).should('exist');
        cy.screenshot( scenery + '/p1_miembro_eliminado');
    }

    validateErrorName(scenery){
        cy.wait(1000);
        cy.contains( 'Name cannot be longer than 191 characters.' ).should('exist');
        cy.screenshot( scenery + '/p1_error_name_member');
    }
    validatePageWasCreatedTitle(title){
        cy.get( this.publishComplete ).should('exist');
        cy.contains( 'Your page is published.' ).should('exist');
        cy.screenshot('17/p1-/p4-pagina-creada');
    }

    validatePostWasDeleted(){
        cy.get('div[data-test-text="notification-content"]').should('contain','Post deleted');
    }

    validateFilterWasAply({email, name}, scenery){
        cy.contains( email ).should('exist');
        cy.contains( name ).should('exist');
        cy.screenshot( scenery + '/p1_filter_member_aply');
    }

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
