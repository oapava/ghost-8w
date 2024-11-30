class When{
    //Getters Page Objects
    get version(){
        return '5/'
    }

    get titleInput(){
        return 'textarea[data-test-editor-title-input]';
    }

    get buttonAddCard(){
        return 'button[aria-label="Add a card"]';
    }

    get buttonHTML(){
        return 'button[data-kg-card-menu-item="HTML"]';
    }

    get buttonUnsplash(){
        return 'button[data-kg-card-menu-item="Unsplash"]';
    }

    get buttonMarkDown(){
        return 'button[data-kg-card-menu-item="Markdown"]';
    }
    get buttonButton(){
        return 'button[data-kg-card-menu-item="Button"]';
    }
    get publishContinueButton(){
        return 'button[data-test-button="continue"]';
    }

    get closeModalPublishFlow(){
        return 'button[data-test-button="close-publish-flow"]';
    }

    get textAreaContent(){
        return 'p[data-koenig-dnd-droppable="true"]';
    }

    get unsplashImageButton(){
        return '.gh-editor-feature-image-unsplash';
    }

    get deletePostConfirmButton(){
        return 'button[data-test-button="delete-post-confirm"]';
    }

    get confirmPublishButton(){
        return 'button[data-test-button="confirm-publish"]';
    }

    get createNewMemberButton(){
        return 'a[data-test-new-member-button="true"]';
    }



    get memberNameInput(){
        return 'input[data-test-input="member-name"]';
    }

    get memberEmailInput(){
        return 'input[data-test-input="member-email"]';
    }

    get saveMemberButton(){
        return 'button[data-test-button="save"]';
    }

    get anchorMembersButton(){
        return 'a[href="#/members/"]';
    }

    get searchMembersInput(){
        return 'input[data-test-input="members-search"]';
    }

    get memberActionsButton(){
        return 'button[data-test-button="member-actions"]';
    }

    get deleteMemberButton(){
        return 'button[data-test-button="delete-member"]';
    }

    get deleteMemberConfirmButton(){
        return 'button[data-test-button="confirm"]';
    }

    get deletePostConfirmButton(){
        return 'button[data-test-button="confirm"]';
    }

    get spanElement(){
        return 'span';
    }

    get hrefPostSpan(){
        return 'data-test-link="posts"';
    }

    get aElement(){
        return 'a';
    }

    get bodyElement(){
        return 'body';
    }

    get inputButtonText(){
        return 'input[data-testid="button-input-text"]'
    }

    get inputButtonURL(){
        return 'input[data-testid="button-input-url"]'
    }

    get specialType(){
        return '.kg-prose[contenteditable="true"]'
    }

    get divElement(){
        return "div"
    }

    get memberNoteInput(){
        return 'textarea[data-test-input="member-note"]'
    }

    get closePublishConfirmationButton(){
        return 'button[data-test-button="close-publish-flow"]';
    }


    get publishFlowButton(){
        return 'button[data-test-button="publish-flow"]';
    }

    get createNewMemberButton(){
        return 'a[data-test-new-member-button="true"]';
    }

    get memberNameInput(){
        return 'input[data-test-input="member-name"]';
    }

    get memberEmailInput(){
        return 'input[data-test-input="member-email"]';
    }

    get memberNoteInput(){
        return 'textarea[data-test-input="member-note"]'
    }

    get saveMemberButton(){
        return 'button[data-test-button="save"]';
    }

    get anchorMembersButton(){
        return 'a[data-test-nav="members"]';
    }

    get searchMembersInput(){
        return 'input[data-test-input="members-search"]';
    }

    get memberActionsButton(){
        return 'button[data-test-button="member-actions"]';
    }

    get deleteMemberButton(){
        return 'button[data-test-button="delete-member"]';
    }

    get deleteMemberConfirmButton(){
        return 'button[data-test-button="confirm"]';
    }

    get h3Element(){
        return 'h3'
    }

    get spanElement(){
        return 'span';
    }

    get buttonYoutube(){
        return 'button[data-kg-card-menu-item="YouTube"]';
    }

    get inputEmbedUrl(){
        return 'input[data-testid="embed-url"]';
    }

    get publishFlowButton(){
        return 'button[data-test-button="publish-flow"]';
    }

    get cmLineDiv(){
        return 'div[class="cm-line"]';
    }

    get deletePageButton(){
        return '[data-test-button="delete"]';
    }

    get spanElement(){
        return 'span';
    }

    get newPost(){
        return 'a[data-test-new-post-button]'
    }

    get bodyElement(){
        return 'body';
    }

    get labelsMember(){
        return '.ember-basic-dropdown';
    }

    get addLabelNew(){
        return 'li.ember-power-select-option';
    }

    get filterMemberButton(){
        return 'div[data-test-button="members-filter-actions"]';
    }

    get typeMemberSelect(){
        return 'select[data-test-select="members-filter"]';
    }

    get labelFilterTextInput(){
        return '.gh-member-label-input';
    }

    get aplyFilterButton(){
        return 'button[data-test-button="members-apply-filter"]';
    }

    get filtersSection(){
        return '.gh-filters';
    }

    get nameMemberTextFilter(){
        return 'input[data-test-input="members-filter-value"]';
    }

    get addFilterButton(){
        return 'button[data-test-button="add-members-filter"]';
    }

    get cardDivider(){
        return 'button[data-kg-card-menu-item="Divider"]'
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



    publishMixContent({title,content,html, youtube}, scenery){

        // Hacer click en "New page" para crear una nueva página
        cy.contains('New page').click({ force: true, waitForAnimations: false });

        //Asignar un Titulo
        cy.get(this.titleInput).type(title);

        //Asignar Video
        cy.get(this.textAreaContent).first().click()

        cy.get(this.buttonAddCard).first().click({force: true, waitForAnimations: false});
        cy.get(this.buttonYoutube).scrollIntoView().should('be.visible').click();
        cy.get(this.inputEmbedUrl).should('be.visible').type(youtube).type('{enter}');

        cy.wait(1000)

        // //Asignar Texto en HTML
        cy.get(this.textAreaContent).first().type('{enter}');
        cy.get(this.textAreaContent).first().type(html);

        //Asignar Contenido de texto
        cy.get(this.textAreaContent).first().type('{enter}');
        cy.get(this.textAreaContent).first().type('test');
        cy.get(this.textAreaContent).first().type(content);
        cy.screenshot(this.version + scenery + '/p1_contant-mix-page');

        //Asignar Imagen
        cy.get(this.unsplashImageButton).first().click({force:true})
        cy.wait(1000)
        cy.screenshot(this.version + scenery + '/p2_unsplashImage');
        cy.contains(this.aElement, 'Insert image').then(($elements) => {
            const randomIndex = Math.floor(Math.random() * $elements.length);
            cy.wrap($elements[randomIndex]).click();
        });
        cy.get(this.textAreaContent).first().type('{enter}');

        //Guardar Page
        this.publishPostAndPage( scenery, 1 )
    }

    publishPageWithMarkDownContent({title, content, contentBold, contentItalic, contentHigthL},scenery ){
        // Hacer click en "New page" para crear una nueva página
        cy.contains('New page').click({ force: true, waitForAnimations: false });

        //Asignar un Titulo
        cy.get(this.titleInput).type(title);

        //Asignar contenido normal
        cy.get(this.textAreaContent).first().type(content);
        cy.screenshot(this.version + scenery + '/p1_contant-mix-page');

        //Asignar contenido bold
        cy.get(this.textAreaContent).first().type(contentBold);
        cy.screenshot(this.version + scenery + '/p2_contant-contentBold');

        //Asignar contenido Cursiva
        cy.get(this.textAreaContent).first().type(contentItalic);
        cy.screenshot(this.version + scenery + '/p3_contant-contentItalic');

        //Asignar contenido Cursiva
        cy.get(this.textAreaContent).first().type(contentHigthL);
        cy.screenshot(this.version + scenery + '/p4_contant-contentHigthL');

        this.publishPostAndPage( scenery, 5 )
    }

    createMembersWithOutTag({name, email}, scenery){
        //Darle click al boton de crear nuevo miembro
        cy.get(this.createNewMemberButton).click();

        //Escribir el nombre del miembro
        cy.get(this.memberNameInput).type(name);

        //Escribir el email del miembro
        cy.get(this.memberEmailInput).type(email);
        cy.screenshot(this.version + scenery + '/p1_info_new_member');

        //Darle click en guardar
        cy.get(this.saveMemberButton).click({waitForAnimations: true});
        cy.screenshot(this.version + scenery + '/p2_save_member');

        //Esperar
        cy.wait(500)

        //Refrescar la pagina
        cy.get(this.anchorMembersButton).first().click();
        cy.screenshot(this.version + scenery + '/p3_save_button_member');
        cy.reload(true);

        //Eliminar miembro
        this.deleteMember(email, scenery, 3)

    }

    createMemberSpecial({name, email, note}, scenery){
        //Darle click al boton de crear nuevo miembro
        cy.get(this.createNewMemberButton).click();

        //Escribir el nombre del miembro
        cy.get(this.memberNameInput).type(name);

        //Escribir el email del miembro
        cy.get(this.memberEmailInput).type(email);

        //Ageregar nota a miembro
        cy.get(this.memberNoteInput).type(note);
        cy.screenshot(this.version + scenery + '/p1_info_new_member');


        //Darle click en guardar
        cy.get(this.saveMemberButton).click({waitForAnimations: true});
        cy.screenshot(this.version + scenery + '/p2_save_member');

        //Esperar
        cy.wait(500)

        //Refrescar la pagina
        cy.get(this.anchorMembersButton).first().click();
        cy.screenshot(this.version + scenery + '/p3_save_button_member');
        cy.reload(true);

        this.deleteMember(email, scenery, 4)
    }

    createMemberWhitOutNote({name,email}, scenery){
        //Darle click al boton de crear nuevo miembro
        cy.get(this.createNewMemberButton).click();

        //Escribir el nombre del miembro
        cy.get(this.memberNameInput).type(name);

        //Escribir el email del miembro
        cy.get(this.memberEmailInput).type(email);
        cy.screenshot(this.version + scenery + '/p1_info_new_member');

        //Darle click en guardar
        cy.get(this.saveMemberButton).click({waitForAnimations: true});
        cy.screenshot(this.version + scenery + '/p2_save_member');

        //Esperar
        cy.wait(500)

        //Refrescar la pagina
        cy.get(this.anchorMembersButton).first().click();
        cy.screenshot(this.version + scenery + '/p3_save_button_member');
        cy.reload(true);

        this.deleteMember(email, scenery, 4)
    }

    createMemberWithInvalidName({name,email, invalidName}, scenery){
        //Darle click al boton de crear nuevo miembro
        cy.get(this.createNewMemberButton).click();

        //Escribir el nombre del miembro
        cy.get(this.memberNameInput).type(invalidName);

        //Escribir el email del miembro
        cy.get(this.memberEmailInput).click();

        //Darle click en guardar
        cy.get(this.saveMemberButton).click({waitForAnimations: true});
        cy.screenshot(this.version + scenery + '/p2_save_member');

    }

    createMemberWhitLabel({name, email, labels}, scenery){
        //Darle click al boton de crear nuevo miembro
        cy.get(this.createNewMemberButton).click();

        //Escribir el nombre del miembro
        cy.get(this.memberNameInput).type(name);

        //Escribir el email del miembro
        cy.get(this.memberEmailInput).type(email);
        cy.screenshot(this.version + scenery + '/p1_info_new_member');

        //Asignar Labels
        labels.forEach((label) => {
            cy.get(this.labelsMember).type(label)
            cy.wait(200);
            cy.get(this.addLabelNew).first().click();
        });
        cy.screenshot(this.version + scenery + '/p2_add_labels_members');

        //Darle click en guardar
        cy.get(this.saveMemberButton).click({waitForAnimations: true});
        cy.screenshot(this.version + scenery + '/p3_save_member');
        cy.reload(true);

        //Ir a miembros
        cy.visit(Cypress.env('mambersUrl'));
        cy.url().should('include', '/ghost/#/members');

        //Filtrar
        cy.wait(500);
        cy.get(this.filterMemberButton).click();
        cy.get(this.typeMemberSelect).select('Label');
        cy.get(this.labelFilterTextInput).type(labels[0]);
        cy.get(this.labelFilterTextInput).type('{enter}');
        cy.get(this.filtersSection).first().click();
        cy.wait(1000)
        cy.get(this.aplyFilterButton).first().click();

    }

    createMemberAndFilterByNameAndEmail({name, email, labels}, scenery){
        //Darle click al boton de crear nuevo miembro
        cy.get(this.createNewMemberButton).click();

        //Escribir el nombre del miembro
        cy.get(this.memberNameInput).type(name);

        //Escribir el email del miembro
        cy.get(this.memberEmailInput).type(email);
        cy.screenshot(this.version + scenery + '/p1_info_new_member');

        //Asignar Labels
        labels.forEach((label) => {
            cy.get(this.labelsMember).type(label)
            cy.wait(200);
            cy.get(this.addLabelNew).first().click();
        });
        cy.screenshot(this.version + scenery + '/p2_add_labels_members');

        //Darle click en guardar
        cy.get(this.saveMemberButton).click({waitForAnimations: true});
        cy.screenshot(this.version + scenery + '/p3_save_member');
        cy.reload(true);

        //Ir a miembros
        cy.visit(Cypress.env('mambersUrl'));
        cy.url().should('include', '/ghost/#/members');

        //Filtrar
        cy.wait(500);
        cy.get(this.filterMemberButton).click();
        cy.get(this.typeMemberSelect).select('Name');
        cy.get(this.nameMemberTextFilter).type(name);
        cy.get(this.nameMemberTextFilter).type('{enter}');
        cy.get(this.filtersSection).first().click();
        cy.wait(1000)

        //Agregar un nuevo filtro
        cy.get(this.addFilterButton).first().click();


        //Filtrar por Email
        cy.get(this.typeMemberSelect).eq(1).select('Email');
        cy.get(this.nameMemberTextFilter).eq(1).type(email);
        cy.get(this.nameMemberTextFilter).eq(1).type('{enter}');
        cy.get(this.filtersSection).first().click();
        cy.get(this.aplyFilterButton).first().click();
    }


    deleteMember(member, scenery, step){
        //buscar miembro
        cy.get(this.searchMembersInput).type(member);
        cy.contains(member).click();
        cy.screenshot(this.version + scenery + '/_0_deleteMember_search_member');

        //click en boton de acciones y eliminar
        cy.get(this.memberActionsButton).click();
        cy.get(this.deleteMemberButton).click();
        cy.screenshot(this.version + scenery + '/_1_deleteMember_confirm_delete');
        cy.get(this.deleteMemberConfirmButton).click();

    }


    // publishPostAndPage(scenery, step){
    //     cy.get(this.publishFlowButton).should('exist'); // Publish
    //     cy.screenshot(scenery + '/' + step + '_0_publishButton', {disableTimersAndAnimations: false});
    //     cy.get(this.publishFlowButton).first().click();
    //
    //     //Continuar a review final
    //     cy.get(this.publishContinueButton).should('exist'); // Continue, final review
    //     cy.wait(500);
    //     cy.screenshot(scenery + '/' + step + '_1_finalReview', {disableTimersAndAnimations: false});
    //     cy.get(this.publishContinueButton).first().click();
    //
    //     //Publicar post
    //     cy.get(this.confirmPublishButton).should('be.visible'); //Publish post, right now
    //     cy.wait(500);
    //     cy.screenshot(scenery + '/' + step + '_2_publishRightNow', {disableTimersAndAnimations: false});
    //     cy.get(this.confirmPublishButton).first().click();
    // }
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

            cy.get(this.titleInput).type(`${markdownElement.title}`);
            cy.get(this.titleInput).type('{enter}');


            cy.get(this.buttonAddCard).first().click({force: true, waitForAnimations: false});
            cy.wait(2000)
            cy.get(this.buttonMarkDown).scrollIntoView().should('be.visible').click();

            cy.get(this.specialType).first()
            cy.get(this.specialType).first().should('be.visible').type(markdownElement.textMarkdown).type('{enter}');


            cy.screenshot(`5/e20/p3-nueva-pagina-con-contenido-nuevo`);
            cy.wait(1000);

            this.publishPostAndPage('5/e20', 'p3');
            cy.visit(Cypress.env('baseUrl') + '/ghost/#/pages');
            cy.url().should('include', '/pages');
            cy.get(this.bodyElement).type('{esc}');
            cy.screenshot('e17/p1-/p3-pagina-creada');

            cy.visit(Cypress.env('pageUrl'));
            cy.url().should('include', '/ghost/#/pages');
        });
    }

    createPageAndPublishWithButton(data) {
        cy.screenshot(`5/e24/p1-visit-page-list`);
        cy.contains('New page').click({ force: true, waitForAnimations: false });


        cy.get(this.titleInput).type(`${data.title}`);
        cy.get(this.titleInput).type('{enter}');


        cy.get(this.buttonAddCard).first().click({force: true, waitForAnimations: false});

        cy.get(this.buttonButton).scrollIntoView().should('be.visible').click();

        cy.get('[data-testid="button-input-text"]')
            .should('be.visible')
            .type(data.buttonText);

        cy.get('[data-testid="button-input-url"]')
            .should('be.visible')
            .type(data.url)
            .type('{enter}');


        cy.screenshot(`5/e20/p3-nueva-pagina-con-contenido-nuevo`);
        cy.wait(1000);

        this.publishPostAndPage('5/e20', 'p3');
        cy.url().should('include', '/pages');
        cy.get(this.bodyElement).type('{esc}');
        cy.screenshot('e24/p1-/p3-pagina-creada');

        cy.visit(Cypress.env('pageUrl'));
        cy.url().should('include', '/ghost/#/pages');
    }

    createPageAndPublishWithButtonAndText(data) {
        cy.screenshot(`5/e23/p1-visit-page-list`);
        cy.contains('New page').click({ force: true, waitForAnimations: false });


        cy.get(this.titleInput).type(`${data.title}`);
        cy.get(this.titleInput).type('{enter}');

        cy.get(this.buttonAddCard).first().click({force: true, waitForAnimations: false});

        cy.get(this.buttonMarkDown).scrollIntoView().should('be.visible').click();

        cy.get(this.specialType).first()
        cy.get(this.specialType).first().should('be.visible').type(data.textMarkdown).type('{enter}');

        cy.get(this.buttonAddCard).first().click({force: true, waitForAnimations: false});

        cy.get(this.buttonButton).scrollIntoView().should('be.visible').click();

        cy.get('[data-testid="button-input-text"]')
            .should('be.visible')
            .type(data.buttonText);

        cy.get('[data-testid="button-input-url"]')
            .should('be.visible')
            .type(data.url)
            .type('{enter}');


        cy.screenshot(`5/e23/p3-nueva-pagina-con-contenido-nuevo`);
        cy.wait(1000);

        this.publishPostAndPage('5/e20', 'p3');
        cy.url().should('include', '/pages');
        cy.get(this.bodyElement).type('{esc}');
        cy.screenshot('e17/p1-/p3-pagina-creada');

        cy.visit(Cypress.env('pageUrl'));
        cy.url().should('include', '/ghost/#/pages');
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

    validatePublishPostAndCloseModal(scenery, step){
        cy.url().should('include', '/ghost/#/posts');
        cy.get(this.closeModalPublishFlow).should('be.visible');
        cy.wait(1000);
        cy.screenshot(scenery + '/' + step + '_1_postPublished');
        cy.get(this.closeModalPublishFlow).click();

        cy.get(this.spanElement).contains('New post').should('be.visible');
        cy.screenshot(scenery + '/' + step + '_2_listPostFinal');
    }

    publishPostAndPage(scenery, step){
        cy.get(this.publishFlowButton).should('be.visible'); // Publish
        cy.screenshot(this.version + scenery + '/_0_publishButton', {disableTimersAndAnimations: false});
        cy.get(this.publishFlowButton).first().click();

        cy.get(this.publishContinueButton).should('be.visible'); // Continue, final review
        cy.wait(500);
        cy.screenshot(this.version + scenery + '/_1_finalReview', {disableTimersAndAnimations: false});
        cy.get(this.publishContinueButton).first().click();

        cy.get(this.confirmPublishButton).should('be.visible'); //Publish post, right now
        cy.wait(500);
        cy.screenshot(this.version + scenery + '/_2_publishRightNow', {disableTimersAndAnimations: false});
        cy.wait(500);
        cy.get(this.confirmPublishButton).first().click();
    }

    createNewPost(scenary){
        cy.screenshot(this.version + scenary + '/_0_listOfPosts');
        cy.get(this.newPost).should('be.visible').click();
    }

    createCard(cardType,scenary){
        //Añadir una Card
        cy.get(this.buttonAddCard).first().click({force: true, waitForAnimations: false});
        cy.screenshot(this.version + scenary + `/${{cardType}}`);
        //Añadir un boton como card
        cy.get(cardType).scrollIntoView().should('be.visible').click({ force: true, waitForAnimations: false });
        cy.screenshot(this.version + scenary + `/${{cardType}}2`);
    };

    publishPostWithButtonAndDivider(scenary,{NameLink1, link1, NameLink2,link2}){
        this.createNewPost(scenary);
        cy.screenshot(this.version + scenary + '/CreateNewPost');
        cy.get(this.titleInput).should('be.visible').type(NameLink1);
        cy.get(this.titleInput).type('{enter}');
        //Create button card
        this.createCard(this.buttonButton,scenary);
        //Llenar la card
        cy.get(this.inputButtonText).should('be.visible').type(NameLink1);
        cy.get(this.inputButtonURL).should('be.visible').type(link1);
        //Create divider card
        cy.get(this.titleInput).should('be.visible').click();
        cy.get(this.titleInput).type('{enter}');
        this.createCard(this.cardDivider,scenary);
        this.publishPostAndPage(scenary,'p3');
    }

    publishPostWithHtml(scenary,{Title,html}){
        this.createNewPost(scenary);
        cy.screenshot(this.version + scenary + '/CreateNewPost');
        cy.get(this.titleInput).should('be.visible').type(Title);
        cy.get(this.titleInput).type('{enter}');
        //Create HTML card
        this.createCard(this.buttonHTML,scenary);
        cy.get(this.cmLineDiv).click().type(html);
        this.publishPostAndPage(scenary,'p3');
    }

    publishPostWithMarkDown(scenary,{Title,md}){
        this.createNewPost(scenary);
        cy.screenshot(this.version + scenary + '/CreateNewPost');
        cy.get(this.titleInput).should('be.visible').type(Title);
        cy.get(this.titleInput).type('{enter}');
        //Create HTML card
        this.createCard(this.buttonMarkDown,scenary);
        cy.get(this.specialType).first()
        cy.get(this.specialType).first().should('be.visible').type(md).type('{enter}');
        this.publishPostAndPage(scenary,'p3');
    }

    publishPostWithUnplash(scenary,{Title,md}){
        this.createNewPost(scenary);
        cy.screenshot(this.version + scenary + '/CreateNewPost');
        cy.get(this.titleInput).should('be.visible').type(Title);
        cy.get(this.titleInput).type('{enter}');
        //Create HTML card
        this.createCard(this.buttonUnsplash,scenary);
        cy.contains(this.aElement, 'Insert image').then(($elements) => {
            const randomIndex = Math.floor(Math.random() * $elements.length);
            cy.wrap($elements[randomIndex]).click();
        });
        this.publishPostAndPage(scenary,'p3');
    }

    publishPostWithUnplashAndDeleteIt(scenary,{Title,md}){
        this.createNewPost(scenary);
        cy.screenshot(this.version + scenary + '/CreateNewPost');
        cy.get(this.titleInput).should('be.visible').type(Title);
        cy.get(this.titleInput).type('{enter}');
        //Create HTML card
        this.createCard(this.buttonUnsplash,scenary);
        cy.contains(this.aElement, 'Insert image').then(($elements) => {
            const randomIndex = Math.floor(Math.random() * $elements.length);
            cy.wrap($elements[randomIndex]).click();
        });
        this.publishPostAndPage(scenary,'p3');
        cy.get(this.closePublishConfirmationButton).should('be.visible').click();
        cy.get(this.h3Element).contains(Title).scrollIntoView().first().rightclick();
        cy.get(this.deletePageButton).should('be.visible').click();
        cy.get(this.deletePostConfirmButton).should('be.visible').click();
    }

    publishPostWithProduct(scenary,{Title,Desc}){
        this.createNewPost(scenary);
        cy.screenshot(this.version + scenary + '/CreateNewPost');
        cy.get(this.titleInput).should('be.visible').type(Title);
        cy.get(this.titleInput).type('{enter}');
        //Create product card
        cy.get(this.buttonAddCard).first().click({force: true, waitForAnimations: false});
        //Añadir un boton como card
        cy.get(this.divElement).contains('Product').scrollIntoView().should('be.visible').click({ force: true, waitForAnimations: false });
        cy.focused().type(Title+'{enter}');
        cy.focused().type(Desc);
        cy.screenshot(this.version + scenary + `/product`);
        this.publishPostAndPage(scenary,'p3');
    }

}

export default new When();