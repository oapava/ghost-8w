import Given from '../steps/given';
import When from '../steps/when';
import Then from '../steps/then';
import { dataPoolApriori } from '../data/dataTest';
import { getDataMokaroo, getDataFaker } from '../helpers/helpers';

describe('Pruebas E2E Ghost', ()=>{

    beforeEach(() => {
        Cypress.Screenshot.defaults({
            disableTimersAndAnimations: false,
        })
        Given.givenLogin();
        Given.givenNavigateDashboard();
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
        const stage = 'E0010';
        // THEN: Visitar pagina de posts
        Given.givenNavigateToSettings(data, stage);

        // WHEN: Crear y publicar post
        When.settingsUpdateSocialAcountsError(data, stage);

        // THEN: Verificar post publicado
        Then.seeSettingsError(data, stage);
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



});