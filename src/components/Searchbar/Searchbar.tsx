"use client";

import { IMovie } from "@/interfaces/movie";
import { useEffect, useState } from "react";
import { DebounceInput } from "react-debounce-input";
import SearchbarResults from "./SearchbarResults/SearchbarResults";
import styles from './Searchbar.module.scss'
import { Locale } from "@/utils/i18n-config";
import { defaultLocale } from "@/utils/i18n";
import { getDictionary } from "@/utils/dictionaries";

const Searchbar = ({ dict }: { dict: any }) => {

    const [movieResult, setMovieResults] = useState<IMovie[]>([]);
    const [hasFocus, setHasFocus] = useState<boolean>(false);
    const [language, setLanguage] = useState<any>({})


    const updateMovieSearch = async (query: string) => {

        const response = await fetch(`/api/movies/search?query=${query}`);
        const { results }: { results: IMovie[] } = await response.json();
        setMovieResults(results.slice(0, 10).filter((movie: IMovie) => movie.backdrop_path))
    }



    // useEffect(() => {
    //     const getDict = async () => {
    //         const dict = await getDictionary(locale)
    //         setLanguage(dict)
    //     }
    //     try {
    //         getDict()
    //     } catch (e) {
    //         throw new Error("Can't get the language")
    //     }


    // }, [language, locale])

    return (
        <div className={styles.searchContainer}>
            <DebounceInput
                minLength={3}
                debounceTimeout={500}
                placeholder={dict.searchBar}
                onChange={e => updateMovieSearch(e.target.value)}
                onBlur={() => setHasFocus(false)}
                onFocus={() => setHasFocus(true)}
            />
            {movieResult.length > 0 && hasFocus && <SearchbarResults movieResult={movieResult} />}
        </div>
    )
}

export default Searchbar;