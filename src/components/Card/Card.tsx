import React from "react";
import styles from "./Card.module.scss"
import Image from "next/image";
import Link from "next/link";
import { IMovie } from "@/interfaces/movie";
import { Locale } from "@/utils/i18n-config";

const Card = ({ media, locale }: { media: IMovie, locale: Locale }) => {
    const widthCard = "/w500"

    return (
        <div className={styles.card}>
            <Link href={`/${locale}/movies/${media.id}`}>
                <div className={styles.image}>
                    <Image
                        src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}${widthCard}${media.poster_path}`}
                        alt={media.original_title}
                        fill
                        sizes="500w"
                    />
                </div>
                <div className={styles.content}>
                    <p className={styles.vote}>{media.vote_average.toFixed(2)}</p>
                    <h3>{media.title}</h3>
                    <p> Le {new Date(media.release_date).toLocaleDateString("fr-FR")}</p>
                </div>
            </Link>
        </div>
    )
}

export default Card;