function buttonRedirect() {
  cy.get('[data-test="button-option"]')
    .as('button')
    .should('have.text', 'Botões');
  cy.get('@button').click();
}

function formRedirect() {
  cy.get('[data-test="form-option"]')
    .as('button')
    .should('have.text', 'Formulários');

  cy.get('@button').click();
}

function radiobuttonRedirect() {
  cy.get('[data-test="radio-option"]')
    .as('button')
    .should('have.text', 'Radio buttons');
  cy.get('@button').click();
}

function toggleRedirect() {
  cy.get('[data-test="toggle-option"]')
    .as('button')
    .should('have.text', 'Toggles');
  cy.get('@button').click();
}

function checkboxRedirect() {
  cy.get('[data-test="checkbox-option"]')
    .as('button')
    .should('have.text', 'Checkboxes');
  cy.get('@button').click();
}

function dropdownRedirect() {
  cy.get('[data-test="dropdown-option"]')
    .as('button')
    .should('have.text', 'Dropdown');
  cy.get('@button').click();
}

describe('check redirects on dummy home page', () => {
  beforeEach(() => {
    // tela inicial
    cy.visit('/');
  });

  it('check if button Formulários redirects to /forms', () => {
    formRedirect();
    cy.url().should('include', '/cypress/forms');
  });

  it('check if button Botões redirects to /buttons', () => {
    buttonRedirect();
    cy.url().should('include', '/cypress/buttons');

    // depois separar a partir daki
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

  it('check if button Radio buttons redirects to /radio-buttons', () => {
    radiobuttonRedirect();
    cy.url().should('include', '/cypress/radio-buttons');
  });

  it('check if button Toggle redirects to /toggles', () => {
    toggleRedirect();
    cy.url().should('include', '/cypress/toggles');
  });

  it('check if button Checkboxes redirects to /checkboxes', () => {
    checkboxRedirect();
    cy.url().should('include', '/cypress/checkboxes');
  });

  it('check if button Dropdown redirects to /dropdowns', () => {
    dropdownRedirect();
    cy.url().should('include', '/cypress/dropdowns');
  });
});
