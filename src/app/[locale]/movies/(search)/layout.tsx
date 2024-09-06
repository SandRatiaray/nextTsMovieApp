import SearchSidebar from '@/components/SearchSidebar/SearchSidebar';
import styles from './layout.module.scss'
import { getMovieByPath } from '@/utils/movieClient';
import { IGenre } from '@/interfaces/movie';

const MovieSearchLayout = async ({ children }: { children: Readonly<React.ReactNode> }) => {

    const { genres }: { genres: IGenre[] } = await getMovieByPath("/genre/movie/list")

    return (
        <div className={styles.searchContainer}>
            <SearchSidebar genres={genres} />
            <div>{children}</div>
        </div>
    );
};

export default MovieSearchLayout;