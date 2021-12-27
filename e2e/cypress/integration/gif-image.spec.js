const API_KEY = `${Cypress.env('endpointServer').api_key}`;

describe('Gif App', () => {
    beforeEach(() => {
        cy.intercept({
            method: 'GET',
            url: 'https://api.giphy.com/v1/gifs/search**'
        }, {
            query: {
                api_key: API_KEY,
                q: 'cheese',
                random_id: 'e826c9fc5c929e0d6c6d423841a282aa',
            },
            fixture: 'gifs'
        }).as('gifSearchConfigRoute');

        cy.intercept({
            method: 'GET',
            url: 'https://api.giphy.com/v1/gifs/trending**'
        }, {
            query: {
                api_key: API_KEY,
                bundle: 'messaging_non_clips',
                limit: 20,
                random_id: 'e826c9fc5c929e0d6c6d423841a282aa',
            },
            fixture: 'trendingGifs'
        }).as('gifTrendingConfigRoute');
        cy.visit('/');

    });

    describe('loads trending gifs with a limit of 20', () => {
        it('load gif page', () => {
            cy.wait('@gifTrendingConfigRoute');
            cy.get('[data-testid="search-input"]').should('not.exist');
            cy.get('[data-testid="trending-gif"]').its('length').should('eq', 20);
            cy.get('[data-testid="gif-header"]').should('contain', 'Trending Gif Images');
        });

        it('checks search inputs works', () => {
            cy.get('[data-testid="search-icon"]').click();
            cy.get('[data-testid="search-input"]').should('have.focus');
            cy.get('[data-testid="search-input"]').should('exist').and('be.visible');
        });

        it('clears text when cancel button is clicked', () => {
            cy.wait('@gifTrendingConfigRoute');
            cy.get('[data-testid="search-icon"]').click();
            cy.get('[data-testid="search-input"]').type('cheese');
            cy.get('[data-testid="clear-text"]').click();
            cy.get('[data-testid="search-input"]').invoke('val').its('length').should('eq', 0);
            cy.get('[data-testid="gif-header"]').should('contain', 'Trending Gif Images');
        });

        it('opens modal with details, and closes properly', () => {
            cy.wait('@gifTrendingConfigRoute');
            cy.get('[data-testid="trending-gif"]').eq(0).click();
            cy.get('[data-testid="gif-modal"]').should('exist').and('be.visible');
            cy.get('[data-testid="close-modal"]').should('exist').and('be.visible');
            cy.get('[data-testid="modal-content"]').should('exist').and('be.visible');
            cy.get('[data-testid="close-modal"]').click();
            cy.get('[data-testid="gif-modal"]').should('not.exist');
        });
    });

    describe('Gif Search', () => {
        beforeEach(() => {
            cy.wait('@gifTrendingConfigRoute');
            cy.get('[data-testid="search-icon"]').click();
            cy.get('[data-testid="search-input"]').type('cheese');
            cy.wait('@gifSearchConfigRoute');

            cy.get('[data-testid="gif-header"]').should('contain', 'Searched Gif Images');
        })
        it('fetches gif on-search', () => {
            cy.get('[data-testid="search-gif-image"]').should('exist').and('be.visible');
            cy.get('[data-testid="search-gif-image"]').its('length').should('eq', 20);
        });

        it('loads more gifs on scroll', () => {
            cy.scrollTo('bottom');
            cy.wait(1000)
            cy.scrollTo('bottom');
            cy.wait(1000)
            cy.get('[data-testid="search-gif-image"]').its('length').should('eq', 50);
        });
    })
});
