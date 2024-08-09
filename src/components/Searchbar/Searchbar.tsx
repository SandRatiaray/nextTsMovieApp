"use client";

import { IMovie } from "@/interfaces/movie";
import { useState } from "react";
import { DebounceInput } from "react-debounce-input";
import SearchbarResults from "./SearchbarResults/SearchbarResults";
import styles from './Searchbar.module.scss'

const Searchbar = () => {

    const [movieResult, setMovieResults] = useState<IMovie[]>([])
    const [hasFocus, setHasFocus] = useState<boolean>(false)

    const updateMovieSearch = async (query: string) => {

        const response = await fetch(`/api/movies/search?query=${query}`)
        const { results }: { results: IMovie[] } = await response.json();
        setMovieResults(results.slice(0, 10).filter((movie: IMovie) => movie.backdrop_path))
    }

    return (
        <div className={styles.searchContainer}>
            <DebounceInput
                minLength={3}
                debounceTimeout={500}
                placeholder='Titres,personnes,genres'
                onChange={e => updateMovieSearch(e.target.value)}
                onBlur={() => setHasFocus(false)}
                onFocus={() => setHasFocus(true)}
            />
            {movieResult.length > 0 && hasFocus && <SearchbarResults movieResult={movieResult} />}
        </div>
    )
}

export default Searchbar;