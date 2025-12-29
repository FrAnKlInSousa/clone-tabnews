import styles from './index.module.css';

export default function Button({ buttonText, dataTest }) {
  return (
    <>
      <button data-test={dataTest} className={styles.mainButton}>
        {buttonText}
      </button>
    </>
  );
}
