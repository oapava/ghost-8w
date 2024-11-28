
class When{
    //Getters Page Objects
    get titleInput(){
        return 'textarea[data-test-editor-title-input]';
    }

    get unsplashImageButton(){
        return '.gh-editor-feature-image-unsplash';
    }
    get aElement(){
        return 'a';
    }
    get publishFlowButton(){
        return 'button[data-test-button="publish-flow"]';
    }
    get buttonMarkDown(){
        return 'button[data-kg-card-menu-item="Markdown"]';
    }
    get buttonAddCard(){
        return 'button[aria-label="Add a card"]';
    }
    get publishContinueButton(){
        return 'button[data-test-button="continue"]';
    }
    get confirmPublishButton(){
        return 'button[data-test-button="confirm-publish"]';
    }
    get inputMarkDown(){
        return 'input[data-testid="markdown-editor"]';
    }
    get contentEntryTitle(){
        return 'h3.gh-content-entry-title';
    }
    get bodyElement(){
        return 'body';
    }

    createPageWithImageAndTitle(data){
        const pageData = data
        cy.screenshot('e17/p1-pagina-creada-listada');
        cy.contains('New page').click({ force: true, waitForAnimations: false });

        cy.get(this.titleInput).type(pageData + '{enter}');
        cy.get(this.unsplashImageButton).first().click({force:true})
        cy.wait(1000)
        cy.contains(this.aElement, 'Insert image').then(($elements) => {
            const randomIndex = Math.floor(Math.random() * $elements.length);
            cy.wrap($elements[randomIndex]).click();
        });
        cy.screenshot('e17/p2-pagina-creada-con-contenido');

        this.publishPostAndPage('5/e13', 'p2');

        cy.url().should('include', '/pages');
        cy.contains(pageData).should('exist');
        cy.wait(500);
        cy.get(this.bodyElement).type('{esc}');
        cy.screenshot('e17/p1-/p3-pagina-creada');

        cy.visit(Cypress.env('pageUrl'));
        cy.url().should('include', '/ghost/#/pages');

    }

    createPageAndPublishWithMarkDown() {
        cy.screenshot(`5/e20/p1-visit-page-list`);
        cy.contains('New page').click({ force: true, waitForAnimations: false });

        cy.fixture('testData').then((data) => {
            const markdownElement = data.text;
            console.log(markdownElement, "this is mark down")

            cy.get(this.titleInput).type(`${markdownElement.title}`);
            cy.get(this.titleInput).type('{enter}');


            cy.get(this.buttonAddCard).first().click({force: true, waitForAnimations: false});

            cy.get(this.buttonMarkDown).scrollIntoView().should('be.visible').click();

            cy.get('.kg-prose[contenteditable="true"]').first()
            cy.get('.kg-prose[contenteditable="true"]').first().should('be.visible').type(markdownElement.textMarkdown).type('{enter}');


            cy.screenshot(`5/e20/p3-nueva-pagina-con-contenido-nuevo`);
            cy.wait(1000);

            this.publishPostAndPage('5/e20', 'p3');
            cy.url().should('include', '/pages');
            cy.get(this.bodyElement).type('{esc}');
            cy.screenshot('e17/p1-/p3-pagina-creada');

            cy.visit(Cypress.env('pageUrl'));
            cy.url().should('include', '/ghost/#/pages');
        });
    }

    publishPostAndPage(scenery, step){
        cy.get(this.publishFlowButton).should('be.visible'); // Publish
        cy.screenshot(scenery + '/' + step + '_0_publishButton', {disableTimersAndAnimations: false});
        cy.get(this.publishFlowButton).first().click();

        cy.get(this.publishContinueButton).should('be.visible'); // Continue, final review
        cy.wait(500);
        cy.screenshot(scenery + '/' + step + '_1_finalReview', {disableTimersAndAnimations: false});
        cy.get(this.publishContinueButton).first().click();

        cy.get(this.confirmPublishButton).should('be.visible'); //Publish post, right now
        cy.wait(500);
        cy.screenshot(scenery + '/' + step + '_2_publishRightNow', {disableTimersAndAnimations: false});
        cy.get(this.confirmPublishButton).first().click();
    }

}

export default new When();