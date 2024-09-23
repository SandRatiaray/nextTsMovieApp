import LogoutButton from '@/components/logout-button/LogoutButton';
import prisma from '@/lib/prisma';
import { Locale } from '@/utils/i18n-config';
import { getHydratedMovies } from '@/utils/movieClient';
import { getServerSession } from 'next-auth';
import styles from "./page.module.scss"
import Card from '@/components/Card/Card';

interface IMovieLike {
    id: string;
    movieId: string;
    userId: string;
}

interface IUser {
    name?: string;
    email: string;
    image?: string;
}

const ProfilePage = async ({ params: { locale } }: { params: { locale: Locale } }) => {

    const user = await getServerSession() as IUser;

    const { movie }: any = await prisma.user.findFirst({
        where: { email: user.email },
        include: {
            movie: true
        }
    });

    const movies = await getHydratedMovies(movie.map((movie: IMovieLike) => movie.movieId));

    return (
        <div className={styles.profile}>
            <div className={styles.head}>
                <h1>Liste des films aimés</h1>
                <LogoutButton />
            </div>
            <div className={styles.list}>
                {movies.map((movie) => (
                    <Card media={movie} locale={locale} key={movie.id} />
                ))}
            </div>

        </div>
    );
};

export default ProfilePage;