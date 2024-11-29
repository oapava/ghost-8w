import { faker } from '@faker-js/faker';

export function getDataMokaroo(){
    const url = Cypress.env('urlMockarooData');

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
};

export function getDataFaker() {
    const data = [{
        settings:{
            siteTitle: faker.lorem.sentence(),
            siteDescription: faker.lorem.paragraphs(1, '\n\n')
        },
        socialAccounts: {
            urlFacebook: `https://www.facebook.com/${faker.internet.userName()}`,
            urlX: `https://x.com/${faker.internet.userName()}`,
            urlFacebookError: `https://www.facebook.com/ ${faker.internet.userName()}`,
            urlXError: `https://x.com/ ${faker.internet.userName()}`,
        },
        post: {
            content: faker.lorem.paragraphs(1, '\n\n'),
            title: faker.lorem.sentence(),
            description: faker.lorem.paragraphs(1, '\n\n'),
        }
    }];

    return data[0] || [];
};