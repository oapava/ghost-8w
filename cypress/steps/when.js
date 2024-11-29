class When {

    get spanElement(){
        return 'span';
    }

    get siteTitlte(){
        return 'input[placeholder="Site title"]';
    }

    get siteDescription(){
        return 'input[placeholder="Site description"]';
    }

    get dataTestIdExitSettings(){
        return '[data-testid="exit-settings"]';
    }

    get dataTestIdTitlteAndDescription(){
        return '[data-testid="title-and-description"]';
    }

    get dataTestIdSocialAccounts(){
        return '[data-testid="social-accounts"]';
    }

    get placeholderFacebook(){
        return 'input[placeholder="https://www.facebook.com/ghost"]';
    }

    get placeholderX(){
        return 'input[placeholder="https://x.com/ghost"]';
    }

    get cardEmailContent(){
        return 'button[data-kg-card-menu-item="Email content"]';
    }

    get buttonAddCard(){
        return 'button[aria-label="Add a card"]';
    }

    get textAreaContent(){
        return 'p[data-koenig-dnd-droppable="true"]';
    }

    get titleInput(){
        return 'textarea[data-test-editor-title-input]';
    }

    get publishFlowButton(){
        return 'button[data-test-button="publish-flow"]';
    }

    get publishContinueButton(){
        return 'button[data-test-button="continue"]';
    }

    get confirmPublishButton(){
        return 'button[data-test-button="confirm-publish"]';
    }

    get closeModalPublishFlow(){
        return 'button[data-test-button="close-publish-flow"]';
    }



    settingsUpdateTitleAndDescription(data, stage){
        //console.log("PostToPublish -" + JSON.stringify(post));
        cy.get(this.dataTestIdTitlteAndDescription).find('span').contains('Edit').first().click({force:true});

        //Titulo de sitio
        cy.get(this.dataTestIdTitlteAndDescription).find(this.siteTitlte).clear().type(data.settings.siteTitle);
        cy.get(this.dataTestIdTitlteAndDescription).find(this.siteTitlte).type('{enter}');

        //Descripcion de pagina
        cy.get(this.dataTestIdTitlteAndDescription).find(this.siteDescription).clear().type(data.settings.siteDescription);
        cy.get(this.dataTestIdTitlteAndDescription).find(this.siteDescription).type('{enter}');

        //save
        cy.get(this.dataTestIdTitlteAndDescription).find('span').contains('Save').first().click({force:true});
        cy.wait(500);

        cy.get(this.dataTestIdExitSettings).first().click({force:true});
    }

    settingsUpdateSocialAcounts(data, stage){
        //console.log("PostToPublish -" + JSON.stringify(post));
        //cy.visit(Cypress.env('baseUrl') + '/ghost/#/settings/social-accounts');
        cy.get(this.dataTestIdSocialAccounts).find('span').contains('Edit').first().click({force:true});

        //facebook
        cy.get(this.dataTestIdSocialAccounts).find(this.placeholderFacebook).clear().type(data.socialAccounts.urlFacebook);

        //twitter
        cy.get(this.dataTestIdSocialAccounts).find(this.placeholderX).clear().type(data.socialAccounts.urlX);

        //save
        cy.get(this.dataTestIdSocialAccounts).find('span').contains('Save').first().click({force:true});
        cy.wait(500);

        cy.get(this.dataTestIdExitSettings).first().click({force:true});
    }

    settingsUpdateSocialAcountsError(data, stage){
        //console.log("PostToPublish -" + JSON.stringify(post));
        //cy.visit(Cypress.env('baseUrl') + '/ghost/#/settings/social-accounts');
        cy.get(this.dataTestIdSocialAccounts).find('span').contains('Edit').first().click({force:true});

        //facebook
        cy.get(this.dataTestIdSocialAccounts).find(this.placeholderFacebook).clear().type(data.socialAccounts.urlFacebookError);

        //twitter
        cy.get(this.dataTestIdSocialAccounts).find(this.placeholderX).clear().type(data.socialAccounts.urlXError);

        cy.get(this.dataTestIdSocialAccounts).find('span').contains('Save').first().click({force:true});
    }

    postCreatePostContent(data, stage){
        console.log("data -" + JSON.stringify(data));
        cy.visit(Cypress.env('postPageUrl'));
        cy.get(this.spanElement).contains('New post').first().click({force:true, waitForAnimations: false, animationDistanceThreshold: 20});
        //Se ingresa titulo del post
        if(data.post.title !== ""){
            cy.get(this.titleInput).type(data.post.title);
            cy.get(this.titleInput).type('{enter}');
        }

        //Contenido del post
        cy.get(this.textAreaContent).first().type(data.post.content);
        cy.get(this.textAreaContent).first().type('{enter}');

        //Card de opciones + emailcontent
        cy.get(this.buttonAddCard).first().click({force:true, waitForAnimations: false});
        cy.get(this.cardEmailContent).first().click({force:true, waitForAnimations: false});

        //Ingresar texto email
        cy.get('[data-kg-card="email"]').find('[data-lexical-editor="true"]').type(data.post.description); // Escribe dentro del área editable


        this.publishPostAndPage(stage, 0);
        this.validatePublishPostAndCloseModal(stage, 0);

    }









    publishPostAndPage(scenery, step){
        cy.get(this.publishFlowButton).should('exist'); // Publish
        cy.screenshot(scenery + '/' + step + '_0_publishButton', {disableTimersAndAnimations: false});
        cy.get(this.publishFlowButton).first().click(); 

        //Continuar a review final
        cy.get(this.publishContinueButton).should('be.visible'); // Continue, final review
        cy.wait(500);
        cy.screenshot(scenery + '/' + step + '_1_finalReview', {disableTimersAndAnimations: false});
        cy.get(this.publishContinueButton).first().click(); 

        //Publicar post
        cy.get(this.confirmPublishButton).should('be.visible'); //Publish post, right now
        cy.wait(500);
        cy.screenshot(scenery + '/' + step + '_2_publishRightNow', {disableTimersAndAnimations: false});
        cy.get(this.confirmPublishButton).first().click(); 
    }

    validatePublishPostAndCloseModal(scenery, step){
        cy.url().should('include', '/ghost/#/posts');
        cy.get(this.closeModalPublishFlow).should('be.visible');
        cy.wait(1000);
        cy.screenshot(scenery + '/' + step + '_1_postPublished');
        cy.get(this.closeModalPublishFlow).click();

        cy.get(this.spanElement).contains('New post').should('be.visible');
        cy.screenshot(scenery + '/' + step + '_2_listPostFinal');
    }
}

export default new When();