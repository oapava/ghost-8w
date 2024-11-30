import Given from '../steps/given';
import When from '../steps/when';
import Then from '../steps/then';
import { dataPoolApriori } from '../data/dataTest';
import { getMemberSpecialData, getPageDataMarkdown, memberSchemaFaker,
    getUrlDynamicRandom, getUrlTextDynamicRandom, getTitleDynamicRamdom, getDataMokaroo, getDataFaker } from '../helpers/helpers';

describe('Pruebas E2E Ghost', ()=>{

    beforeEach(() => {
        Cypress.Screenshot.defaults({
            disableTimersAndAnimations: false,
        })
        Given.givenNavigateToInitialPage();
        Given.givenLogin();
        Given.givenNavigateDashboard();
        Given.givenLoadPoolData();
    });

    it('E0001: Crear y publicar Post con botones y Divider', () => {
        const scenary = "E0001";
        Given.navigateToPost();
        cy.get('@postButtons').then((data) => {
            const randomIndex = Math.floor(Math.random() * data.length);
            const dataRow = data[randomIndex];
            When.publishPostWithButtonAndDivider(scenary,dataRow);
            Then.validatePostWasPublished(scenary);
        })
    });

    it('E0002: Crear Post con contenido HTML, probando en otro navegador', () => {
        const scenary = "E0002";
        Given.navigateToPost();
        cy.get('@postHtml').then((data) => {
            const randomIndex = Math.floor(Math.random() * data.length);
            const dataRow = data[randomIndex];
            When.publishPostWithHtml(scenary,dataRow);
            Then.validatePostWasPublished(scenary);
        })
    });

    it('E0003: Crear y publicar un post con contenido formateado usando Markdown, probando en otro navegado', () => {
        const scenary = "E0003";
        Given.navigateToPost();
        cy.get('@postMarkDown').then((data) => {
            const randomIndex = Math.floor(Math.random() * data.length);
            const dataRow = data[randomIndex];
            When.publishPostWithMarkDown(scenary,dataRow);
            Then.validatePostWasPublished(scenary);
        })
    });

    it('E0005: Crear y publicar un post con una imagen de Unsplash, probando en otro navegador', () => {
        const scenary = "E0005";
        Given.navigateToPost();
        cy.get('@postMarkDown').then((data) => {
            const randomIndex = Math.floor(Math.random() * data.length);
            const dataRow = data[randomIndex];
            When.publishPostWithUnplash(scenary,dataRow);
            Then.validatePostWasPublished(scenary);
        })
    });

    it('E0006: Eliminar un post publicado, probando en otro navegador', () => {
        const scenary = "E0006";
        Given.navigateToPost();
        cy.get('@postMarkDown').then((data) => {
            const randomIndex = Math.floor(Math.random() * data.length);
            const dataRow = data[randomIndex];
            When.publishPostWithUnplashAndDeleteIt(scenary,dataRow);
            Then.validatePostWasDeleted(scenary);
        })
    });

    it('E0007: Crear post con contenido html sin cerrar etiquetas y con formatos errados, probar en otro navegador', () => {
        const scenary = "E0002";
        Given.navigateToPost();
        cy.get('@postBadHTML').then((data) => {
            const randomIndex = Math.floor(Math.random() * data.length);
            const dataRow = data[randomIndex];
            When.publishPostWithHtml(scenary,dataRow);
            Then.validatePostWasPublished(scenary);
        })
    });

    it('E0008: Crear post con Product', () => {
        const scenary = "E0005";
        Given.navigateToPost();
        cy.get('@postProduct').then((data) => {
            const randomIndex = Math.floor(Math.random() * data.length);
            const dataRow = data[randomIndex];
            When.publishPostWithProduct(scenary,dataRow);
            Then.validatePostWasPublished(scenary);
        })
    });

    it('E0009: dataApriori -  Crear Post con email content', () => {
        const data = dataPoolApriori;
        const stage = 'E0009';
        // THEN: Visitar pagina de posts
        Given.navigateToPostPage(data, stage);

        // WHEN: Crear y publicar post
        When.postCreatePostContent(data, stage);

        // THEN: Verificar post publicado
        Then.seePostPublishedPostWithContent(data, stage);
    });

    it('E0010: dataApriori -  Configurar las URLs de las redes sociales', () => {
        const data = dataPoolApriori;
        const stage = 'E0010';
        // THEN: Visitar pagina de posts
        Given.givenNavigateToSettings(data, stage);

        // WHEN: Crear y publicar post
        When.settingsUpdateSocialAcounts(data, stage);

        // THEN: Verificar post publicado
        Then.seeSettingsSocialAcounts(data, stage);
    });


    it('E0011: dataApriori - Modificar titulo y descripcion del sitio', () => {
        const data = dataPoolApriori;
        const stage = 'E0011';
        // THEN: Visitar pagina de posts
        Given.givenNavigateToSettings(data, stage);

        // WHEN: Crear y publicar post
        When.settingsUpdateTitleAndDescription(data, stage);

        // THEN: Verificar post publicado
        Then.seeSettingsTitle(data, stage);
    });

    it('E0013: dataApriori - Configurar formatos erroroneos en las redes sociales', () => {
        const data = dataPoolApriori;
        const stage = 'E0013';
        // THEN: Visitar pagina de posts
        Given.givenNavigateToSettings(data, stage);

        // WHEN: Crear y publicar post
        When.settingsUpdateSocialAcountsError(data, stage);

        // THEN: Verificar post publicado
        Then.seeSettingsError(data, stage);
    });


    it('Escenario 18: Crear una página con un título y una imagen de portada.', () => {
        getTitleDynamicRamdom().then((data) => {
            Given.givenNavigateToPagePage();

            When.createPageWithImageAndTitle(data.title);

            Then.validatePageWasCreatedTitle(data.title);
        })
    });


    it('Escenario 20: Crear una página con un bloque de código Markdown.', () => {
        Given.givenNavigateToPagePage();

        When.createPageAndPublishWithMarkDown();

        Then.validatePageWasCreatedTitle("Título para texto en Markdown");
    });

    it('Escenario 23: Crear una pagina con un texto en mark down y un botonn', () => {
        getUrlTextDynamicRandom().then((data) => {
            Given.givenNavigateToPagePage();

            When. createPageAndPublishWithButtonAndText(data);

            Then.validatePageWasCreatedTitle(data.title);
        })
    });

    it('Escenario 24: Crear una página con un botón con enlace externo.', () => {
        getUrlDynamicRandom().then((data) => {
            Given.givenNavigateToPagePage();

            When.createPageAndPublishWithButton(data);

            Then.validatePageWasCreatedTitle(data.title);
        })
    });

    it('E0026: Publicar una página con contenido mixto: imágenes, videos, y texto en formato Markdown.', ()=>{
        const scenery = 'E0026';
        cy.get('@fixturePage').then((data) => {
            //Given
            Given.givenNavigateToPagePage();
            //When
            When.publishMixContent(data[0], scenery);
            //Then
            Then.validatePageWasPublished(scenery);
        });
    });

    it('E0028: Crear una página con texto en negrita, cursiva, y subrayado mediante Markdown o herramientas del editor.', ()=>{
        const scenery = 'E0028';
        getPageDataMarkdown().then((data) => {
            //Given
            Given.givenNavigateToPagePage();
            //When
            When.publishPageWithMarkDownContent(data, scenery);
            //Then
            Then.validatePageWasPublished(scenery);
        });
    });

    it('E0029: Crear un miembro sin asignar etiquetas y verificar su correcta creación.', ()=>{
        const scenery = 'E0029';
        const random = Math.floor(Math.random() * (50));
        cy.get('@fixtureMembers').then((data) => {
            //Given
            Given.givenNavigateTomembers();
            //When
            When.createMembersWithOutTag(data[random], scenery);
            //Then
            Then.validateMemberDoesNotExist(scenery);
        });
    });

    it('E0030: Probar la creación de un miembro con un nombre que incluya caracteres especiales (ej.: ñ, é, @).', ()=>{
        const scenery = 'E0030';
        getMemberSpecialData().then((data) => {
            //Given
            Given.givenNavigateTomembers();
            //When
            When.createMemberSpecial(data, scenery);
            //Then
            Then.validateMemberDoesNotExist(scenery);
        });
    });

    it('E0031: Crear un miembro con un campo note completo y validar su creación.', ()=>{
        const scenery = 'E0031';
        const random = Math.floor(Math.random() * (50));
        cy.get('@fixtureMembers').then((data) => {
            //Given
            Given.givenNavigateTomembers();
            //When
            When.createMemberWhitOutNote(data[random], scenery);
            //Then
            Then.validateMemberDoesNotExist(scenery);
        });
    });

    it('E0032: Crear un miembro con un nombre que exceda los 191 caracteres y validar el mensaje de error.', ()=>{
        const scenery = 'E0032';
        const random = Math.floor(Math.random() * (50));
        cy.get('@fixtureMembers').then((data) => {
            //Given
            Given.givenNavigateTomembers();
            //When
            When.createMemberWithInvalidName(data[random], scenery);
            //Then
            Then.validateErrorName(scenery);
        });
    });

    it('E0033: Asignar múltiples labels a un miembro y verificar su correcta visualización y filtrado.', ()=>{
        const scenery = 'E0033';
        const data = memberSchemaFaker();
        //Given
        Given.givenNavigateTomembers();
        //When
        When.createMemberWhitLabel(data, scenery);
        //Then
        Then.validateFilterWasAply(data, scenery);
    });

    it('E0035: Crear un nuevo miembro, guardarlo y aplicar filtros de nombre y email', ()=>{
        const scenery = 'E0035';
        const data = memberSchemaFaker();
        //Given
        Given.givenNavigateTomembers();
        //When
        When.createMemberAndFilterByNameAndEmail(data, scenery);
        //Then
        Then.validateFilterWasAply(data, scenery);
    });

    it('E0037: PseudoAleatorioDinamico -  Crear Post con email content', () => {
        getDataMokaroo().then((datosMk) => {
            const data = datosMk[0];
            const stage = 'E0037';
            // THEN: Visitar pagina de posts
            Given.navigateToPostPage(data, stage);

            // WHEN: Crear y publicar post
            When.postCreatePostContent(data, stage);

            // THEN: Verificar post publicado
            Then.seePostPublishedPostWithContent(data, stage);
        });
    });

    it('E0038: PseudoAleatorioDinamico -  Configurar las URLs de las redes sociales', () => {
        getDataMokaroo().then((datosMk) => {
            const data = datosMk[0];
            const stage = 'E0038';
            // THEN: Visitar pagina de posts
            Given.givenNavigateToSettings(data, stage);

            // WHEN: Crear y publicar post
            When.settingsUpdateSocialAcounts(data, stage);

            // THEN: Verificar post publicado
            Then.seeSettingsSocialAcounts(data, stage);
        });
    });

    it('E0039: PseudoAleatorioDinamico - Modificar titulo y descripcion del sitio', () => {
        getDataMokaroo().then((datosMk) => {
            const data = datosMk[0];
            const stage = 'E0039';
            // THEN: Visitar pagina de posts
            Given.givenNavigateToSettings(data, stage);

            // WHEN: Crear y publicar post
            When.settingsUpdateTitleAndDescription(data, stage);

            // THEN: Verificar post publicado
            Then.seeSettingsTitle(data, stage);
        });
    });

    it('E0040: PseudoAleatorioDinamico - Configurar formatos erroroneos en las redes sociales', () => {
        getDataMokaroo().then((datosMk) => {
            const data = datosMk[0];
            const stage = 'E0040';
            // THEN: Visitar pagina de posts
            Given.givenNavigateToSettings(data, stage);

            // WHEN: Crear y publicar post
            When.settingsUpdateSocialAcountsError(data, stage);

            // THEN: Verificar post publicado
            Then.seeSettingsError(data, stage);
        });
    });

    it('E0041: Aleatorio -  Crear Post con email content', () => {
        const data = getDataFaker();
        const stage = 'E0041';
        // THEN: Visitar pagina de posts
        Given.navigateToPostPage(data, stage);

        // WHEN: Crear y publicar post
        When.postCreatePostContent(data, stage);

        // THEN: Verificar post publicado
        Then.seePostPublishedPostWithContent(data, stage);
    });

    it('E0042: Aleatorio -  Configurar las URLs de las redes sociales', () => {
        const data = getDataFaker();
        const stage = 'E0042';
        // THEN: Visitar pagina de posts
        Given.givenNavigateToSettings(data, stage);

        // WHEN: Crear y publicar post
        When.settingsUpdateSocialAcounts(data, stage);

        // THEN: Verificar post publicado
        Then.seeSettingsSocialAcounts(data, stage);
    });

    it('E0043: Aleatorio - Modificar titulo y descripcion del sitio', () => {
        const data = getDataFaker();
        const stage = 'E0043';
        // THEN: Visitar pagina de posts
        Given.givenNavigateToSettings(data, stage);

        // WHEN: Crear y publicar post
        When.settingsUpdateTitleAndDescription(data, stage);

        // THEN: Verificar post publicado
        Then.seeSettingsTitle(data, stage);
    });

    it('E0044: Aleatorio - Configurar formatos erroroneos en las redes sociales', () => {
        const data = getDataFaker();
        const stage = 'E0044';
        // THEN: Visitar pagina de posts
        Given.givenNavigateToSettings(data, stage);

        // WHEN: Crear y publicar post
        When.settingsUpdateSocialAcountsError(data, stage);

        // THEN: Verificar post publicado
        Then.seeSettingsError(data, stage);
    });


})