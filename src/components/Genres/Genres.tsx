import React from 'react';
import Link from 'next/link';
import { getMovieByPath } from '@/utils/movieClient';
import { IGenre, IGenresMovies } from '@/interfaces/movie';
import styles from './Genres.module.scss';
import { getDictionary } from '@/utils/dictionaries';
import { Locale } from '@/utils/i18n-config';




const Genres = async ({ locale }: { locale: Locale }) => {
    const i18n = await getDictionary(locale)
    const { genres }: IGenresMovies = await getMovieByPath("/genre/movie/list", [], locale)
    return (
        <div>
            <h2> {i18n.genres.title}</h2>
            <div className={styles.container}>
                {genres.map((genre: IGenre) => (
                    <div key={genre.id} className={styles.genre}>
                        <Link href={`/movies/genres/${genre.id}`}>
                            <p> {genre.name}</p>
                        </Link>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Genres;