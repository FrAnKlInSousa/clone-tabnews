import styles from './index.module.css';

import clsx from 'clsx';

export default function Cypress() {
  return (
    <div data-test="container" className={clsx(styles.container)}>
      <div>
        <h1 data-test="title">Página dummy para treinar automações</h1>
        <h2 data-test="instructions">
          Escolha abaixo o tópico que deseja treinar
        </h2>
      </div>

      <div data-test="studyContents" className={clsx(styles.studyContents)}>
        <a data-test="form-anchor" href="/cypress/forms">
          <button data-test="form-button" className={clsx(styles.button)}>
            Formulários
          </button>
        </a>
        <a data-test="button" href="/cypress/buttons">
          <button data-test="form-button" className={clsx(styles.button)}>
            Botões
          </button>
        </a>
        <a data-test="radio-button" href="/cypress/radio-buttons">
          <button data-test="form-button" className={clsx(styles.button)}>
            Radio buttons
          </button>
        </a>
        <a data-test="toggle" href="/cypress/toggles">
          <button data-test="form-button" className={clsx(styles.button)}>
            Toggles
          </button>
        </a>
        <a data-test="checkbox" href="/cypress/checkboxes">
          <button data-test="form-button" className={clsx(styles.button)}>
            Checkboxes
          </button>
        </a>
        <a data-test="dropdown" href="/cypress/dropdowns">
          <button data-test="form-button" className={clsx(styles.button)}>
            Dropdown
          </button>
        </a>
      </div>
    </div>
  );
}
