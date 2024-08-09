import { IMovie } from "@/interfaces/movie";
import { getMovieByPath } from "@/utils/movieClient";
import React from "react";
import Card from "../Card/Card";
import styles from './popular.module.scss'

const Popular = async () => {
    const { results }: { results: IMovie[] } = await getMovieByPath('/movie/popular');
    const popularMovies = results.slice(0, 6);

    return (
        <div>
            <h2>Les plus populaires</h2>
            <div className={styles.container}>
                {popularMovies.map((movie) => (
                    <Card key={movie.id} media={movie} />
                ))}
            </div>
        </div>
    )
}

export default Popular;