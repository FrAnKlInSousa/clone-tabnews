import styles from './index.module.css';

export default function FrontPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Front</h1>
      <p className={styles.text}>
        Minha primeira página no Next com um pouco de CSS
      </p>
    </div>
  );
}
