import { faker } from '@faker-js/faker';

export const getPageDataMarkdown = ()=> {
    const url = Cypress.env('poolPageMarkDown') + '1';

    return cy.request({
        method: 'GET',
        url,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        return response.body[0];
      });
}

export const getMemberSpecialData = ()=> {
    const url = Cypress.env('poolSpecialMember') + '1';

    return cy.request({
        method: 'GET',
        url,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        return response.body[0];
      });
}

export const memberSchemaFaker = ()=>{
  const member = {
      "name": faker.lorem.sentences({ min: 1, max: 3 }),
      "email": faker.internet.email(),
      "note": faker.lorem.sentences({ min: 5, max: 10 }),
      "labels": [faker.word.noun(),faker.word.noun(),faker.word.noun()],
    }
  return member;
}
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
