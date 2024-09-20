import React from 'react';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import Searchbar from '../Searchbar/Searchbar';
import LanguageSelector from '../language-selector/LanguageSelector';
import { Locale } from '@/utils/i18n-config';
import { getDictionary } from '@/utils/dictionaries';


const Header = async ({ locale }: { locale: Locale }) => {
    const i18n = await getDictionary(locale);

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">
                    <Image
                        src="/logo.png"
                        alt="MyMovieApp"
                        className="dark:invert"
                        width={150}
                        height={50}
                        priority
                    />
                </Link>
                <div className={styles.navigation}>
                    <nav>
                        <ul>
                            <li><Link href={`/${locale}/tvshows`}>{i18n.header.tvShow}</Link></li>
                            <li><Link href={`/${locale}/movies`}>{i18n.header.movies}</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className={styles.usersPart}>
                <Searchbar dict={i18n} />
                <Link href={`/${locale}/signup`}>Inscription</Link>
                <Link href={`/${locale}/user/profile`}>
                    <FontAwesomeIcon icon={faUser} />
                </Link>

                <LanguageSelector />
            </div>
        </header>
    );
};

export default Header;