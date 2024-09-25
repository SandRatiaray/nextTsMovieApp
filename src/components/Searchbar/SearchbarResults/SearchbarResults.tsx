import { IMovie } from '@/interfaces/movie';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './SearchbarResults.module.scss'
import { Locale } from '@/utils/i18n-config';

const SearchbarResults = ({ movieResult, locale }: { movieResult: IMovie[], locale: Locale }) => {

    const widthCard = "/w500"

    return (
        <div className={styles.searchResults}>
            {movieResult.map((movie) => (
                <div key={movie.id} onClick={() => console.log("sa fonctionne")}>
                    <Link href={`/${locale}/movies/${movie.id}`}
                        onMouseDown={(e) => e.preventDefault()}
                    >
                        <Image
                            width={90}
                            height={50}
                            src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}${widthCard}${movie.backdrop_path}`}
                            alt={movie.title}
                        />
                        <p>{movie.title}</p>
                    </Link>
                </div>
            ))
            }
        </div >
    );
};

export default SearchbarResults;