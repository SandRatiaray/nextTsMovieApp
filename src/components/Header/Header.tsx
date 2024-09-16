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
            </div>
            <div className={styles.navigation}>
                <nav>
                    <ul>
                        <li><Link href="/tvshows">{i18n.header.tvShow}</Link></li>
                        <li><Link href="/movies">{i18n.header.movies}</Link></li>
                    </ul>
                </nav>
            </div>
            <Searchbar dict={i18n} />
            <div>
                <FontAwesomeIcon icon={faUser} />
            </div>
            <LanguageSelector />
        </header>
    );
};

export default Header;