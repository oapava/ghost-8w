export const getTitleDynamicRamdom = ()=> {
    const url = Cypress.env('poolTitle');

    return cy.request({
        method: 'GET',
        url: url,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        expect(response.status).to.eq(200);
        return response.body;
    });
}

export const getUrlDynamicRandom = ()=> {
    const url = Cypress.env('poolUrl');

    return cy.request({
        method: 'GET',
        url: url,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        expect(response.status).to.eq(200);
        return response.body;
    });
}

export const getUrlTextDynamicRandom = ()=> {
    const url = Cypress.env('poolUrlText');

    return cy.request({
        method: 'GET',
        url: url,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        expect(response.status).to.eq(200);
        return response.body;
    });
}
