import { IMovieDetail, IProduction_companies } from '@/interfaces/movie';
import React, { Suspense } from 'react';
import styles from "./MovieDetails.module.scss"
import Image from 'next/image';
import MovieCredits from '../movie-credits/MovieCredits';
import { Locale } from '@/utils/i18n-config';
import { getDictionary } from '@/utils/dictionaries';

const MovieDetails = async ({ movie, locale }: { movie: IMovieDetail, locale: Locale }) => {
    const i18n = await getDictionary(locale);

    return (
        <div className={styles.details}>
            <div className={styles.background}>
                <Image
                    src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/original${movie.backdrop_path}`}
                    alt={movie.title}
                    fill
                />
            </div>
            <div className={styles.content}>
                <Image
                    src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w342${movie.poster_path}`}
                    width={300}
                    height={450}
                    style={{ borderRadius: '10px' }}
                    alt={movie.title}
                />
                <div className={styles.description}>
                    <h1>
                        {movie.title}{"  "}
                        <span className={styles.releaseDate}>
                            ({new Date(movie.release_date).getFullYear()})
                        </span>
                    </h1>
                    <p className={styles.production}>
                        {i18n.movieDetail.production} :{" "}
                        <span>
                            {movie.production_companies
                                .map((company: IProduction_companies) => company.name)
                                .join(", ")
                            }
                        </span>
                    </p>
                    <h2>{i18n.movieDetail.synopsis}</h2>
                    <p className={styles.overview}>{movie.overview}</p>
                    <h2 style={{ margin: "0px 0px  14px 0px" }}>Acteurs</h2>
                    <div className={styles.credits}>
                        <Suspense fallback={<p>{i18n.loading}...</p>}>
                            <MovieCredits movieId={movie.id} />
                        </Suspense>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MovieDetails;