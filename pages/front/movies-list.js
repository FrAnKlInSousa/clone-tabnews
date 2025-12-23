import styles from './movies-list.module.css';
export default function MoviesList() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Melhores filmes</h1>
        <h2>Top 3 filmes</h2>
        <hr />
      </div>

      <div className={styles.movies}>
        <div className={styles.movieFrame}>
          <h3>Antes que termine o dia</h3>
          <div className={styles.poster}>
            <a href="https://www.imdb.com/pt/title/tt0332136/" target="_blank">
              <img
                className={styles.posterImg}
                src="/images/if-only-poster.jpg"
                alt="homem e mulher abraçados"
              />
            </a>
          </div>
          <div className={styles.p}>
            Filme romântico pra macho que não sabe chorar.
          </div>
        </div>
        <div className={styles.movieFrame}>
          <h3>Zona mortal</h3>
          <a href="https://www.imdb.com/pt/title/tt6097798/" target="_blank">
            <img
              className={styles.posterImg}
              src="/images/radius-poster.jpg"
              alt="homem e mulher com alvo no fundo"
            />
          </a>

          <div className={styles.p}>Filme de suspense com plot bom.</div>
        </div>
        <div className={styles.movieFrame}>
          <h3>O mistério das duas irmãs</h3>
          <a href="https://www.imdb.com/pt/title/tt0815245/" target="_blank">
            <img
              className={styles.posterImg}
              src="/images/uninvited-poster.jpg"
              alt="sobra de mulher atrás da janela"
            />
          </a>

          <div className={styles.p}>
            Outro suspense com plot de fdp (acontece algo durante o filme todo,
            mas você não percebe nem vai perceber ao ler isso).
          </div>
        </div>
      </div>
    </div>
  );
}
