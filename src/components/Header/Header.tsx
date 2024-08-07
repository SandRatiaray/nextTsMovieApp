import React from 'react';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';


const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Image
                    src="/logo.png"
                    alt="MyMovieApp"
                    className="dark:invert"
                    width={150}
                    height={50}
                    priority
                />
            </div>
            <div className={styles.navigation}>
                <nav>
                    <ul>
                        <li>Séries</li>
                        <li>Films</li>
                    </ul>
                </nav>
            </div>
            <input type="text" placeholder='Titres,personnes,genres' />
            <div>
                <FontAwesomeIcon icon={faUser} />
            </div>
        </header>
    );
};

export default Header;