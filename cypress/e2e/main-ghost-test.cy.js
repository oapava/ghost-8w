import Given from '../steps/given';
import When from '../steps/when';
import Then from '../steps/then';

describe('Pruebas E2E Ghost', ()=>{

    beforeEach(() => {
        Cypress.Screenshot.defaults({
            disableTimersAndAnimations: false,
        })
        Given.givenLogin();
        Given.givenNavigateDashboard();
    });

    // it('E0009: Post con email content', () => {
    //     const data = 'E0009';
    //     const stage = 'E0009';
    //     // THEN: Visitar pagina de posts
    //     Given.navigateToPostPage(data, stage);

    //     // WHEN: Crear y publicar post
    //     When.postCreatePostContent(data, stage);

    //     // THEN: Verificar post publicado
    //     Then.seePostPublishedPostWithContent(data, stage);
    // });

    // it('E0010: Settings Config social', () => {
    //     const data = 'E0010';
    //     const stage = 'E0010';
    //     // THEN: Visitar pagina de posts
    //     Given.givenNavigateToSettings(data, stage);

    //     // WHEN: Crear y publicar post
    //     When.settingsUpdateSocialAcounts(data, stage);

    //     // THEN: Verificar post publicado
    //     Then.seeSettings(data, stage);
    // });


    // it('E0011: Settings titulo y descripcion', () => {
    //     const data = 'E0011';
    //     const stage = 'E0011';
    //     // THEN: Visitar pagina de posts
    //     Given.givenNavigateToSettings(data, stage);

    //     // WHEN: Crear y publicar post
    //     When.settingsUpdateTitleAndDescription(data, stage);

    //     // THEN: Verificar post publicado
    //     Then.seeSettings(data, stage);
    // });

    it('E0013: Settings formatos incorrectos Config social', () => {
        const data = 'E0010';
        const stage = 'E0010';
        // THEN: Visitar pagina de posts
        Given.givenNavigateToSettings(data, stage);

        // WHEN: Crear y publicar post
        When.settingsUpdateSocialAcounts(data, stage);

        // THEN: Verificar post publicado
        Then.seeSettings(data, stage);
    });




});