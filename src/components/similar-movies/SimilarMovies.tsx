import { IMovie } from '@/interfaces/movie';
import { getMovieByPath } from '@/utils/movieClient';
import styles from './SimilarMovies.module.scss'
import React from 'react';
import Card from '../Card/Card';
import { Locale } from '@/utils/i18n-config';

const SimilarMovies = async ({ movieId, locale }: { movieId: string, locale: Locale }) => {
    const { results }: { results: IMovie[] } = await getMovieByPath(`/movie/${movieId}/similar`);
    return (
        <div className={styles.similar}>
            <div className={styles.list}>
                {results.filter((movie: IMovie) => movie.poster_path).slice(0, 6).map((movie: IMovie) => (
                    <Card media={movie} key={movie.id} locale={locale} />
                ))}
            </div>
        </div>
    );
};

export default SimilarMovies;