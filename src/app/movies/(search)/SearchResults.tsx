import { getMovieByPath } from '@/utils/movieClient';
import styles from './SearchResults.module.scss'
import { IMovie } from '@/interfaces/movie';
import Card from '@/components/Card/Card';


const SearchResults = async ({ genreId, searchParams }: { genreId?: string, searchParams: any }) => {
    const { results }: { results: IMovie[] } = await getMovieByPath("/discover/movie", [
        { key: "sort_by", value: searchParams.sort_by },
        { key: "release_gte", value: searchParams["release_gte"] },
        { key: "release_lte", value: searchParams["release_lte"] },
        { key: "whith_genres", value: genreId }
    ])

    return (
        <div className={styles.results}>
            {results.filter((movie) => movie.poster_path).map((movie: IMovie) => (
                <Card key={movie.id} media={movie} />
            ))}
        </div>
    );
};

export default SearchResults;