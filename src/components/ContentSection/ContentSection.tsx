import { Button, Loader, RatingIndicator } from '@ui5/webcomponents-react';
import styles from './ContentSection.module.scss';
import { IMovieDetailsContent } from './ContentSection.interface';
// import { useSelector } from 'react-redux';
// import { selectMoviesDetails } from '../../features/movie-datails/movie-details-slice';

export const ContentSection = ({ movieDetails, loading }: IMovieDetailsContent) => {
  // const stateMovieDetails = useSelector(selectMoviesDetails);

  const calcRaiting = (raiting: string | undefined) => {
    const result = ((Number(raiting) * 5) / 10);
    return result;
  }

  if (loading) {
    return <Loader progress="60%" />
  }

  return (
    <section className={styles.container}>
      <div className={styles.informations}>
        <h1>
          {movieDetails?.title}
          <small>({movieDetails?.year})</small>
        </h1>
        <div className={styles.description}>
          <p>
            {movieDetails?.description}
          </p>
        </div>
        <div className={styles.subInformations}>
          <div>
            <strong>Elenco</strong>
            <i>{movieDetails?.actors}</i>
          </div>
          <div>
            <strong>Gênero</strong>
            <i>{movieDetails?.genre}</i>
          </div>
          <div className={styles.raiting}>
            <strong>Nota</strong>
            <RatingIndicator
              disabled
              max={5}
              value={calcRaiting(movieDetails?.imdbRating)}
            />
            <p>{calcRaiting(movieDetails?.imdbRating)}</p>
          </div>
          <div className={styles.raiting}>
            <Button
              typeof='submit'
              className={styles.buttonFavorite}
            >
              Favoritos 🧡
            </Button>
          </div>

        </div>
      </div>
      <div className={styles.imagePoster}>
        <img src={movieDetails?.poster} alt={`Image ${movieDetails?.title}`} />
      </div>
    </section>
  )
}