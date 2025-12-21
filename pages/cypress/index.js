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
        <a data-test="from" href="/cypress/forms">
          <p>Formulários</p>
        </a>
        <a data-test="button" href="/cypress/buttons">
          <p>Botões</p>
        </a>
        <a data-test="radio-button" href="/cypress/radio-buttons">
          <p>Radio buttons</p>
        </a>
        <a data-test="toggle" href="/cypress/toggles">
          <p>Toggles</p>
        </a>
        <a data-test="checkbox" href="/cypress/checkboxes">
          <p>Checkboxes</p>
        </a>
        <a data-test="dropdown" href="/cypress/dropdowns">
          <p>Dropdown</p>
        </a>
      </div>
    </div>
  );
}
