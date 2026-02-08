import styles from './index.module.css';
import Button from '../../components/button/button.js';

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
        <a href="/cypress/forms">
          <Button dataTest={'form-option'} buttonText={'Formulário'} />
        </a>
        <a href="/cypress/buttons">
          <Button buttonText="Botão" dataTest="button-option" />
        </a>
        <a href="/cypress/radio-buttons">
          <Button buttonText={'Radio button'} dataTest={'radio-option'} />
        </a>
        <a href="/cypress/toggles">
          <Button dataTest={'toggle-option'} buttonText={'Toggle'} />
        </a>
        <a href="/cypress/checkboxes">
          <Button dataTest={'checkbox-option'} buttonText={'Checkbox'} />
        </a>
        <a href="/cypress/dropdowns">
          <Button dataTest={'dropdown-option'} buttonText={'Dropdown'} />
        </a>
      </div>
    </div>
  );
}
