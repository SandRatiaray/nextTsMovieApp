import MovieDetails from '@/components/movie-details/MovieDetails';
import SimilarMovies from '@/components/similar-movies/SimilarMovies';
import { IMovieDetail } from '@/interfaces/movie';
import { Locale } from '@/utils/i18n-config';
import { getMovieByPath } from '@/utils/movieClient';
import { notFound } from 'next/navigation';
import React, { Suspense } from 'react';

export const dynamic = "force-static";
export const revalidate = 3600;

const MoviesDetail = async ({ params: { id, locale } }: { params: { id: string, locale: Locale } }) => {
    const movie: IMovieDetail = await getMovieByPath(`/movie/${id}`, [], locale);

    if (!movie.original_title) {
        return notFound();
    }

    return (
        <div>
            < MovieDetails movie={movie} locale={locale} />
            <Suspense fallback={<p> Chargement ...</p>}>
                <SimilarMovies movieId={movie.id} locale={locale} />
            </Suspense>
        </div>
    );
};

export default MoviesDetail;