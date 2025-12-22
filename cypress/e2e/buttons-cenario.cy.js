describe('dummy home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('check title and subtitle', () => {
    cy.get('[data-test="title"]').should(
      'have.text',
      'Página dummy para treinar automações',
    );
  });

  it('check only subtitle', () => {
    cy.get('[data-test="instructions"]').should(
      'have.text',
      'Escolha abaixo o tópico que deseja treinar',
    );

    cy.get('[data-test="button"]').as('button').should('have.text', 'Botões');

    cy.get('@button').click();
    cy.url().should('include', '/cypress/buttons');

    cy.get('@button').should('have.text', 'Confirmar').click();
    cy.get('@button').should('have.text', 'Clicou');

    cy.get('[data-test="next-button"]').click();
    cy.url().should('include', 'cypress/buttons/caso-2');
  });
});
