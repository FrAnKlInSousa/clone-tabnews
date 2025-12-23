import styles from './index.module.css';
import clsx from 'clsx';

export default function CaseThree() {
  return (
    <div className={clsx(styles.container)}>
      <div className={clsx(styles.contentCase)}>
        <h1 className={clsx(styles.title)}>Cenários de testes com botões</h1>
        <h2>Caso 3</h2>
        <div className={clsx(styles.externalBox)}>
          <div className={clsx(styles.internal)}>
            <div>Só pode clicar uma vez</div>
            <div>
              <button className={clsx(styles.button)}>Clique</button>
            </div>
          </div>
          <div>
            <div className={clsx(styles.bottomButton)}>
              <a href="/cypress/buttons/case-2">
                <button className={clsx(styles.button)}>Voltar</button>
              </a>
              <a href="#">
                <button className={clsx(styles.button, styles.bottomButton)}>
                  Próximo
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
