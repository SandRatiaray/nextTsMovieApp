import MovieDetails from '@/components/movie-details/MovieDetails';
import SimilarMovies from '@/components/similar-movies/SimilarMovies';
import { IMovieDetail } from '@/interfaces/movie';
import { getMovieByPath } from '@/utils/movieClient';
import { notFound } from 'next/navigation';
import React, { Suspense } from 'react';

export const dynamic = "force-static";
export const revalidate = 3600;

const MoviesDetail = async ({ params }: { params: { id: string } }) => {
    const movie: IMovieDetail = await getMovieByPath(`/movie/${params.id}`);

    if (!movie.original_title) {
        return notFound();
    }

    return (
        <div>
            < MovieDetails movie={movie} />
            <Suspense fallback={<p> Chargement ...</p>}>
                <SimilarMovies movieId={movie.id} />
            </Suspense>
        </div>
    );
};

export default MoviesDetail;