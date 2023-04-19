import styles from './ResumeSection.module.scss';

export const ResumeSection = () => {
  return (
    <section className={styles.container}>
      <h1>Open Movie</h1>
      <div className={styles.description}>
        <p>
          Plataforma para busca de filmes. Aqui você pode encontrar as informações dos seus filmes preferidos.
        </p>
      </div>
    </section>
  )
}