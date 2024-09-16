"use client";

import Link from "next/link";
import { availableLocales } from "@/utils/i18n";
import styles from './LangageSelector.module.scss'
import { useEffect, useState } from "react";
import { useCurrentLanguage } from "@/hooks/useCurrentLanguage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";


const LanguageSelector = () => {
    const [isOpen, setIsOpen] = useState(false);
    const currentLanguage = useCurrentLanguage();

    useEffect(() => {
        setIsOpen(false)
    }, [currentLanguage])

    return (
        <div className={`${styles.selector} ${isOpen ? styles.enabled : ""}`}>
            <p onClick={() => setIsOpen((currOpen) => !currOpen)}>
                {currentLanguage}
                <span>
                    <FontAwesomeIcon icon={faChevronDown} />
                </span>
            </p>
            <ul>
                {availableLocales.filter((locale) => locale !== currentLanguage)
                    .map((locale) => (
                        <li key={locale}>
                            <Link href={`/${locale}`}>{locale}</Link>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default LanguageSelector;