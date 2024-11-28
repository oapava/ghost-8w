import Given from '../steps/given';
import When from '../steps/when';
import Then from '../steps/then';

describe('Pruebas E2E Ghost', () => {

    beforeEach(() => {
        Cypress.Screenshot.defaults({
            disableTimersAndAnimations: false,
        })
        Given.givenNavigateToInitialPage();
        Given.givenLogin();
        Given.givenNavigateDashboard();
    });


    // it('Escenario 18: Crear una página con un título y una imagen de portada.', () => {
    //     getTitleDynamicRamdom().then((data) => {
    //     Given.givenNavigateToPagePage();
    //
    //     When.createPageWithImageAndTitle(data.title);
    //
    //     Then.validatePageWasCreatedTitle(data.title);
    //     })
    // });


    it('Escenario 20: Crear una página con un bloque de código Markdown.', () => {
        Given.givenNavigateToPagePage();

        When.createPageAndPublishWithMarkDown();

        Then.validatePageWasCreatedTitle("## Título para texto en Markdown");
    });

})