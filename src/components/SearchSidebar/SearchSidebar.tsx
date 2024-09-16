"use client";
import { IGenre } from "@/interfaces/movie";
import { useSelectedLayoutSegment, useParams, notFound } from "next/navigation";
import styles from './SearchSidebar.module.scss'
import Form from "./Form/Form";
import { Locale } from "@/utils/i18n-config";
import { useEffect } from "react";

const SearchSidebar = ({ genres, dict }: { genres: IGenre[], dict: any }) => {
    const segment = useSelectedLayoutSegment();
    const { id }: { id: string, locale: Locale } = useParams();

    const getSidebarTitle = () => {
        if (!segment) {
            return "Films";
        }
        const genre = genres.find((genre: IGenre) => genre.id === Number(id))
        if (!genre) {
            return notFound();
        }
        return genre.name
    };

    const title = getSidebarTitle();

    useEffect(() => {

    }, [])

    return (
        <div className={styles.sidebar}>
            <h1>{title}</h1>
            <Form dict={dict} />
        </div>
    );
};

export default SearchSidebar;