describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/cypress');
    cy.get('[data-test="title"]').should(
      'have.text',
      'Página dummy para treinar automações',
    );
    cy.get('[data-test="instructions"]').should(
      'have.text',
      'Escolha abaixo o tópico que deseja treinar',
    );
    const form = cy.get('[data-test="from"]');
    form.should('have.text', 'Formulários');
    form.click();
    cy.get('[data-test="title"]').should('have.text', 'Página com formulários');
  });
});
