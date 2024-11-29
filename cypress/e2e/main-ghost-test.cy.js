import Given from '../steps/given';
import When from '../steps/when';
import Then from '../steps/then';
import { getMemberSpecialData, getPageDataMarkdown, memberSchemaFaker } from '../helpers/helpers';

describe('Pruebas E2E Ghost', ()=>{

    beforeEach(() => {
        Cypress.Screenshot.defaults({
            disableTimersAndAnimations: false,
        })
        Given.givenLogin();
        Given.givenNavigateDashboard();
        Given.givenLoadPoolData();
    });

        // it('E0026: Publicar una página con contenido mixto: imágenes, videos, y texto en formato Markdown.', ()=>{
        //     const scenery = 'E0026';
        //     cy.get('@fixturePage').then((data) => {
        //         //Given
        //         Given.givenNavigateToPagePage();
        //         //When
        //         When.publishMixContent(data[0], scenery);
        //         //Then
        //         Then.validatePageWasPublished(scenery);
        //     });
        // });
    
    // it('E0028: Crear una página con texto en negrita, cursiva, y subrayado mediante Markdown o herramientas del editor.', ()=>{
    //     const scenery = 'E0028';
    //     getPageDataMarkdown().then((data) => {
    //         //Given
    //         Given.givenNavigateToPagePage();
    //         //When
    //         When.publishPageWithMarkDownContent(data, scenery);
    //         //Then
    //         Then.validatePageWasPublished(scenery);
    //     });
    // });
    
    // it('E0029: Crear un miembro sin asignar etiquetas y verificar su correcta creación.', ()=>{
    //     const scenery = 'E0029';
    //     const random = Math.floor(Math.random() * (50));
    //     cy.get('@fixtureMembers').then((data) => {
    //         //Given
    //         Given.givenNavigateTomembers();
    //         //When
    //         When.createMembersWithOutTag(data[random], scenery);
    //         //Then
    //         Then.validateMemberDoesNotExist(scenery);
    //     });
    // });
    
    // it('E0030: Probar la creación de un miembro con un nombre que incluya caracteres especiales (ej.: ñ, é, @).', ()=>{
    //     const scenery = 'E0030';
    //     getMemberSpecialData().then((data) => {
    //         //Given
    //         Given.givenNavigateTomembers();
    //         //When
    //         When.createMemberSpecial(data, scenery);
    //         //Then
    //         Then.validateMemberDoesNotExist(scenery);
    //     });
    // });
    
    // it('E0031: Crear un miembro con un campo note completo y validar su creación.', ()=>{
    //     const scenery = 'E0031';
    //     const random = Math.floor(Math.random() * (50));
    //     cy.get('@fixtureMembers').then((data) => {
    //         //Given
    //         Given.givenNavigateTomembers();
    //         //When
    //         When.createMemberWhitOutNote(data[random], scenery);
    //         //Then
    //         Then.validateMemberDoesNotExist(scenery);
    //     });
    // });
    
    // it('E0032: Crear un miembro con un nombre que exceda los 191 caracteres y validar el mensaje de error.', ()=>{
    //     const scenery = 'E0032';
    //     const random = Math.floor(Math.random() * (50));
    //     cy.get('@fixtureMembers').then((data) => {
    //         //Given
    //         Given.givenNavigateTomembers();
    //         //When
    //         When.createMemberWithInvalidName(data[random], scenery);
    //         //Then
    //         Then.validateErrorName(scenery);
    //     });
    // });
    
    // it('E0033: Asignar múltiples labels a un miembro y verificar su correcta visualización y filtrado.', ()=>{
    //     const scenery = 'E0033';
    //     const data = memberSchemaFaker();
    //     //Given
    //     Given.givenNavigateTomembers();
    //     //When
    //     When.createMemberWhitLabel(data, scenery);
    //     //Then
    //     Then.validateFilterWasAply(data, scenery);
    // });
    
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

    
})