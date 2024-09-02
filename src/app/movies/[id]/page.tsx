import MovieDetails from '@/components/movie-details/MovieDetails';
import { IMovieDetail } from '@/interfaces/movie';
import { getMovieByPath } from '@/utils/movieClient';
import { notFound } from 'next/navigation';
import React from 'react';

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
        </div>
    );
};

export default MoviesDetail;