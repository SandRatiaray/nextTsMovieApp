import SearchSidebar from '@/components/SearchSidebar/SearchSidebar';
import styles from './layout.module.scss'
import { getMovieByPath } from '@/utils/movieClient';
import { IGenre } from '@/interfaces/movie';
import { getDictionary } from '@/utils/dictionaries';
import { Locale } from '@/utils/i18n-config';
import { availableLocales } from "@/utils/i18n";



export function generateStaticParams() {
    return availableLocales.map(locale => ({ locale, }));
}

const MovieSearchLayout = async ({ children, params: { locale } }: { children: Readonly<React.ReactNode>, params: { locale: Locale } }) => {

    const { genres }: { genres: IGenre[] } = await getMovieByPath("/genre/movie/list");
    const i18n = await getDictionary(locale);


    return (
        <div className={styles.searchContainer}>
            <SearchSidebar genres={genres} dict={i18n} />
            <div>{children}</div>
        </div>
    );
};

export default MovieSearchLayout;