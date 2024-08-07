import React from 'react';
import { Roboto } from 'next/font/google';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300"] });

const Header = () => {
    return (
        <header className={`${styles.header} ${roboto.className}`}>
            <div>
                <p>My Movie App</p>
            </div>
            <div>
                <nav>
                    <ul>
                        <li>Séries</li>
                        <li>Films</li>
                    </ul>
                </nav>
            </div>
            <input type="text" placeholder='Titres,personnes,genres...' />
            <div>
                <FontAwesomeIcon icon={faUser} />
            </div>
        </header>
    );
};

export default Header;