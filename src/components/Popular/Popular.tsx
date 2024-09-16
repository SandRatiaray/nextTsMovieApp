import { IMovie } from "@/interfaces/movie";
import { getMovieByPath } from "@/utils/movieClient";
import React from "react";
import Card from "../Card/Card";
import styles from './popular.module.scss'
import { getDictionary } from "@/utils/dictionaries";
import { Locale } from "@/utils/i18n-config";

const Popular = async ({ locale }: { locale: Locale }) => {
    const { results }: { results: IMovie[] } = await getMovieByPath('/movie/popular', [], locale);
    const i18n = await getDictionary(locale);
    const popularMovies = results.slice(0, 6);

    return (
        <div>
            <h2>{i18n.popular.title}</h2>
            <div className={styles.container}>
                {popularMovies.map((movie) => (
                    <Card key={movie.id} media={movie} locale={locale} />
                ))}
            </div>
        </div>
    )
}

export default Popular;