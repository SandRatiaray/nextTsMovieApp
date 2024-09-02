import { IMovie, IMovieSimilar } from '@/interfaces/movie';
import { getMovieByPath } from '@/utils/movieClient';
import styles from './SimilarMovies.module.scss'
import React from 'react';
import Card from '../Card/Card';

const SimilarMovies = async ({ movieId }: { movieId: string }) => {
    const { results }: { results: IMovie[] } = await getMovieByPath(`/movie/${movieId}/similar`);
    return (
        <div className={styles.similar}>
            <div className={styles.list}>
                {results.slice(0, 6).map((movie: IMovie) => (
                    <Card media={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
};

export default SimilarMovies;