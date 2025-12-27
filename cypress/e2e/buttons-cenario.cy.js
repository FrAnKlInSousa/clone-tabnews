describe('dummy home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('check the buttons behaviors', () => {
    // tela inicial
    cy.get('[data-test="button-option"]')
      .as('button-option')
      .should('have.text', 'Botões');

    cy.get('@button-option').click();

    // primeiro caso
    cy.url().should('include', '/cypress/buttons');

    cy.get('[data-test="confirm-button"]')
      .as('confirm-button')
      .should('have.text', 'Confirmar')
      .click();
    cy.get('@confirm-button').should('have.text', 'Parabéns, gênio!');

    cy.get('[data-test="next-button"]').click();

    // segundo caso
    cy.url().should('include', 'cypress/buttons/case-2');
    cy.get('[data-test="instruction"').should(
      'have.text',
      'Mudar a cor do botão para roxo:',
    );

    cy.get('[data-test="confirm-button"]')
      .as('confirm-button')
      .should('have.text', 'Clique aqui')
      .click()
      .should('have.text', 'Mudou de cor');
    cy.get('@confirm-button').should('have.css', 'background-color');
  });
});
