import styles from './index.module.css';
import clsx from 'clsx';
import { useState } from 'react';

export default function Buttons() {
  const [label, setLabel] = useState('Confirmar');

  return (
    <div className={clsx(styles.container)}>
      <h1>Cenários de testes com botões</h1>
      <h2>Caso 1</h2>
      <div className={clsx(styles.coreContent)}>
        <div className={clsx(styles.actionInfo)}>
          <p className={clsx(styles.paragraph)}>
            Mudar texto do botão ao clicar:
          </p>
          <button
            data-test="button"
            className={clsx(styles.button)}
            onClick={() => setLabel('Clicou')}
          >
            {label}
          </button>
        </div>
        <div className={clsx(styles.nextContainer)}>
          <a href="./buttons/caso-2">
            <button data-test="next-button" className={clsx(styles.button)}>
              Próximo teste
            </button>
          </a>
        </div>
      </div>

      {/* <h2>Botão com alert</h2>
      <h2>Botão desabilitado</h2>
      <h2>Botão que abre outra aba</h2>
      <h2>Botão que muda a cor</h2> */}
    </div>
  );
}
