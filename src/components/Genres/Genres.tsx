import React from 'react';
import Link from 'next/link';
import { getMovieByPath } from '@/utils/movieClient';
import { IGenre, IGenresMovies } from '@/interfaces/movie';
import styles from './Genres.module.scss';




const Genres = async () => {
    const { genres }: IGenresMovies = await getMovieByPath("/genre/movie/list")
    return (
        <div>
            <h2> Parcourir par genres</h2>
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