import React from 'react';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import Searchbar from '../Searchbar/Searchbar';
import LanguageSelector from '../language-selector/LanguageSelector';


const Header = () => {
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
                        <li><Link href="/tvshows">Séries</Link></li>
                        <li><Link href="/movies">Films</Link></li>
                    </ul>
                </nav>
            </div>
            <Searchbar />
            <div>
                <FontAwesomeIcon icon={faUser} />
            </div>
            <LanguageSelector />
        </header>
    );
};

export default Header;