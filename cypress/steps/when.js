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

    get buttonYoutube(){
        return 'button[data-kg-card-menu-item="YouTube"]';
    }

    get inputEmbedUrl(){
        return 'input[data-testid="embed-url"]';
    }

    get publishFlowButton(){
        return 'button[data-test-button="publish-flow"]';
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

    get createPostButton(){
        return 'a[data-test-nav="new-story"]';
    }

    get titlePostCreated(){
        return 'span[title="Go to Analytics"]';
    }

    get analitycOptionssButton(){
        return 'button[data-test-button="analytics-actions"]';
    }

    get editPostButton(){
        return 'a.edit-post';
    }

    get updatedFlowButton(){
        return 'button[data-test-button="update-flow"]';
    }

    get revertToDraftButton(){
        return 'button[data-test-button="revert-to-draft"]';
    }

    get deletePostButton(){
        return 'button[data-test-button="delete-post"]';
    }

    get deletePostConfirmButton(){
        return 'button[data-test-button="delete-post-confirm"]';
    }

    get configurationPanelButton(){
        return 'button[data-test-psm-trigger]';
    }

    get postVisibilitySelect(){
        return 'select[data-test-select="post-visibility"]';
    }

    get htmlEditorButton(){
        return 'button[data-kg-card-menu-item="HTML"]';
    }

    get cmLineDiv(){
        return 'div[class="cm-line"]';
    }

    get newPageButton(){
        return 'a[href="#/editor/page/"]';
    }

    get koenigEditorElement(){
        return '.koenig-react-editor';
    }

    get publishSaveButton(){
        return 'button[data-test-button="publish-save"]';
    }

    get confirmPublishButton(){
        return 'button[data-test-button="confirm-publish"]';
    }

    get contentEntryTitle(){
        return 'h3.gh-content-entry-title';
    }

    get deletePageButton(){
        return '[data-test-button="delete"]';
    }

    get asignTagButton(){
        return 'button[class="settings-menu-toggle gh-btn gh-btn-editor gh-btn-icon icon-only gh-btn-action-icon"]';
    }

    get asignTagInput(){
        return 'input[class="ember-power-select-trigger-multiple-input"]';
    }

    get confirmTagAsign(){
        return 'li[data-option-index="1"]';
    }

    get anchorPostButton(){
        return 'a[data-test-nav="posts"]';
    }

    get createNewMemberButton(){
        return 'a[data-test-new-member-button="true"]';
    }

    get returnAnalitics(){
        return 'a.gh-btn-editor.gh-editor-back-button[data-test-breadcrumb=""]'
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

    get detailMemberButton(){
        return 'a[data-test-table-data="details"]';
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

    get time(){
        const now = new Date();
        const formattedDate = Math.floor(new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds()).getTime() / 1000);
        return formattedDate;
    }

    get editSiteTitleButton(){
        return 'button[class="cursor-pointer text-grey-900 dark:text-white dark:hover:bg-grey-900 hover:bg-grey-200 hover:text-black inline-flex items-center justify-center whitespace-nowrap rounded text-sm transition font-semibold h-7 px-3"]';
    }

    get saveSiteTitleButton(){
        return 'button[class="cursor-pointer  bg-green text-white hover:bg-green-400 inline-flex items-center justify-center whitespace-nowrap rounded text-sm transition font-bold h-7 px-3"]';
    }

    get siteTitleInput(){
        return 'input[placeholder="Site title"]';
    }

    get tagNameInput(){
        return '[data-test-input="tag-name"]';
    }

    get tagColorInput(){
        return '[data-test-input="accentColor"]';
    }

    get tagSlugInput(){
        return '[data-test-input="tag-slug"]';
    }

    get tagDescriptionInput(){
        return '[data-test-input="tag-description"]';
    }

    get tagSaveButton(){
        return 'button[data-test-button="save"]';
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

    get liElement(){
        return 'li';
    }

    get buttoGotToAnalitics(){
        return 'a.gh-post-list-button span[title="Go to Analytics"]';
    }

    get linkPostListTitle(){
        return 'a.gh-post-list-title';
    }

    get returnEditorPost(){
        return '.gh-btn-editor.gh-editor-back-button';
    }

    get buttonPublishEditedsave(){
        return 'button[data-test-button="publish-save"]';
    }

    get temporalFilePath(){
        return 'cypress/fixtures/tempData.json';
    }

    get removeAuthorPostButton(){
        return 'span[class="ember-power-select-multiple-remove-btn"]';
    }

    get slugPostName(){
        return 'input[name="post-setting-slug"]';
    }

    get customExerptPostText(){
        return '#custom-excerpt';
    }

    get siteTitleConfig(){
        return 'h2[class="mb-4 ml-2 text-base font-semibold tracking-normal text-black dark:text-grey-400"]';
    }

    get h2Element(){
        return 'h2';
    }

    get designSection(){
        return '#design';
    }

    get designOptionsContainer(){
        return 'div[class="flex items-start justify-between gap-4"]';
    }

    get descriptionSitePlaceHolder(){
        return 'input[value="Thoughts, stories and ideas."]';
    }

    get colorConfigInput(){
        return 'input[aria-label="Color value"]';
    }

    get navigationSection(){
        return '#navigation';
    }

    get navigationOptionsContainer(){
        return 'div[data-testid="navigation"]';
    }

    get newItemNavigationConfig(){
        return 'input[placeholder="New item label"]';
    }

    get nextInputNavigation(){
        return 'input[value="http://localhost:2369/"]';
    }

    get navigationItemSecondary(){
        return 'button[title="Secondary"]';
    }

    get staffSection(){
        return '#staff';
    }

    get emailContributorInput(){
        return 'input[placeholder="jamie@example.com"]';
    }

    get InvitationTextButton(){
        return 'Send invitation';
    }

    get ownerButton(){
        return 'div[data-testid="owner-user"]';
    }

    get ownerFormInputs(){
        return 'input[class="peer z-[1] order-2 h-9 w-full bg-transparent px-3 py-1.5 text-sm placeholder:text-grey-500 dark:placeholder:text-grey-700 md:h-[38px] md:py-2 md:text-md dark:text-white rounded-lg"]';
    }

    get ownerButon(){
        return 'button[class="cursor-pointer bg-black text-white dark:bg-white dark:text-black hover:bg-grey-900 inline-flex items-center justify-center whitespace-nowrap rounded text-sm transition font-bold h-[34px] px-4 min-w-[80px]"]';
    }

    get memberNoteInput(){
        return 'textarea[data-test-input="member-note"]'
    }

    get buttonMemberList(){
        return 'a[data-test-nav="members"]'
    }

    get inputAddRecommendation(){
        return 'input[placeholder="https://www.example.com"]'
    }

    get buttonSettingPost(){
        return 'button.settings-menu-toggle.gh-btn.gh-btn-editor';
    }

    get closePublishConfirmationButton(){
        return 'button[data-test-button="close-publish-flow"]';
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

    get closeModalPublishFlow(){
        return 'button[data-test-button="close-publish-flow"]';
    }

    get confirmPublishButton(){
        return 'button[data-test-button="confirm-publish"]';
    }

    get asignTagButton(){
        return 'button[class="settings-menu-toggle gh-btn gh-btn-editor gh-btn-icon icon-only gh-btn-action-icon"]';
    }

    get asignTagInput(){
        return 'input[class="ember-power-select-trigger-multiple-input"]';
    }

    get confirmTagAsign(){
        return 'li[data-option-index="0"]';
    }

    get anchorPostButton(){
        return 'a[data-test-nav="posts"]';
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

    get detailMemberButton(){
        return 'a[data-test-table-data="details"]';
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

    get editSiteTitleButton(){
        return 'button[class="cursor-pointer text-grey-900 dark:text-white dark:hover:bg-grey-900 hover:bg-grey-200 hover:text-black inline-flex items-center justify-center whitespace-nowrap rounded text-sm transition font-semibold h-7 px-3"]';
    }

    get saveSiteTitleButton(){
        return 'button[class="cursor-pointer  bg-green text-white hover:bg-green-400 inline-flex items-center justify-center whitespace-nowrap rounded text-sm transition font-bold h-7 px-3"]';
    }

    get siteTitleInput(){
        return 'input[placeholder="Site title"]';
    }

    get tagNameInput(){
        return '[data-test-input="tag-name"]';
    }

    get tagColorInput(){
        return '[data-test-input="accentColor"]';
    }

    get tagSlugInput(){
        return '[data-test-input="tag-slug"]';
    }

    get tagDescriptionInput(){
        return '[data-test-input="tag-description"]';
    }

    get tagSaveButton(){
        return 'button[data-test-button="save"]';
    }

    get spanElement(){
        return 'span';
    }

    get buttonMemberList(){
        return 'a[data-test-nav="members"]'
    }

    get inputAddRecommendation(){
        return 'input[placeholder="https://www.example.com"]'
    }

    get version(){
        return '5/'
    }

    get titleInput(){
        return 'textarea[data-test-editor-title-input]';
    }

    get buttonAddCard(){
        return 'button[aria-label="Add a card"]';
    }

    get buttonYoutube(){
        return 'button[data-kg-card-menu-item="YouTube"]';
    }

    get inputEmbedUrl(){
        return 'input[data-testid="embed-url"]';
    }

    get publishContinueButton(){
        return 'button[data-test-button="continue"]';
    }

    get closeModalPublishFlow(){
        return 'button[data-test-button="close-publish-flow"]';
    }

    get htmlEditorButton(){
        return 'button[data-kg-card-menu-item="HTML"]';
    }

    get cmLineDiv(){
        return 'div[class="cm-line"]';
    }

    get newPageButton(){
        return 'a[href="#/editor/page/"]';
    }

    get koenigEditorElement(){
        return '.koenig-react-editor';
    }

    get publishSaveButton(){
        return 'button[data-test-button="publish-save"]';
    }

    get confirmPublishButton(){
        return 'button[data-test-button="confirm-publish"]';
    }

    get contentEntryTitle(){
        return 'h3.gh-content-entry-title';
    }

    get deletePageButton(){
        return '[data-test-button="delete"]';
    }


    get time(){
        const now = new Date();
        const formattedDate = Math.floor(new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds()).getTime() / 1000);
        return formattedDate;
    }

    get tagNameInput(){
        return '[data-test-input="tag-name"]';
    }

    get tagColorInput(){
        return '[data-test-input="accentColor"]';
    }

    get tagSlugInput(){
        return '[data-test-input="tag-slug"]';
    }

    get tagDescriptionInput(){
        return '[data-test-input="tag-description"]';
    }

    get tagSaveButton(){
        return 'button[data-test-button="save"]';
    }

    get spanElement(){
        return 'span';
    }


    get bodyElement(){
        return 'body';
    }

    get liElement(){
        return 'li';
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


    publishPostAndPage(scenery, step){
        cy.get(this.publishFlowButton).should('exist'); // Publish
        cy.screenshot(scenery + '/' + step + '_0_publishButton', {disableTimersAndAnimations: false});
        cy.get(this.publishFlowButton).first().click();

        //Continuar a review final
        cy.get(this.publishContinueButton).should('exist'); // Continue, final review
        cy.wait(500);
        cy.screenshot(scenery + '/' + step + '_1_finalReview', {disableTimersAndAnimations: false});
        cy.get(this.publishContinueButton).first().click();

        //Publicar post
        cy.get(this.confirmPublishButton).should('be.visible'); //Publish post, right now
        cy.wait(500);
        cy.screenshot(scenery + '/' + step + '_2_publishRightNow', {disableTimersAndAnimations: false});
        cy.get(this.confirmPublishButton).first().click();
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

            cy.get(this.titleInput).type(`${markdownElement.title}`);
            cy.get(this.titleInput).type('{enter}');


            cy.get(this.buttonAddCard).first().click({force: true, waitForAnimations: false});
            cy.wait(2000)
            cy.get(this.buttonMarkDown).scrollIntoView().should('be.visible').click();

            cy.get('.kg-prose[contenteditable="true"]').first()
            cy.get('.kg-prose[contenteditable="true"]').first().should('be.visible').type(markdownElement.textMarkdown).type('{enter}');


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

        cy.get('.kg-prose[contenteditable="true"]').first()
        cy.get('.kg-prose[contenteditable="true"]').first().should('be.visible').type(data.textMarkdown).type('{enter}');

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