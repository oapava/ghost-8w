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
        Given.givenLoadPoolData();
    });

})