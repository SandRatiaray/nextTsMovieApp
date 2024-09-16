import React from 'react';
import Image from 'next/image';
import { getMovieByPath } from '@/utils/movieClient';
import { ICast } from '@/interfaces/movie';
import styles from './MovieCredits.module.scss'

const MovieCredits = async ({ movieId }: { movieId: any }) => {
    const { cast }: { cast: ICast[] } = await getMovieByPath(`/movie/${movieId}/credits`)
    const width = "/w185"

    return (
        <div className={styles.credits}>
            {cast.slice(0, 4).map((person: ICast) => (
                <div key={person.id}>
                    <Image
                        src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}${width}${person.profile_path}`}
                        alt={person.name}
                        width={90}
                        height={90}
                    />
                    <p>{person.name}</p>
                </div>
            ))}
        </div>
    );
};

export default MovieCredits;