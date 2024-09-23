import React from "react";
import styles from "./Card.module.scss"
import Image from "next/image";
import Link from "next/link";
import { IMovie } from "@/interfaces/movie";
import { Locale } from "@/utils/i18n-config";
import Like from "./like/Like";

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
                    <ul className={styles.interact}>
                        <li className={styles.vote}>{media.vote_average.toFixed(2)}</li>
                        <li className={styles.like}>
                            <Like mediaId={media.id} />
                        </li>
                    </ul>
                    <h3>{media.title}</h3>
                    {/* <p> Le {new Date(media.release_date).toLocaleDateString("fr-FR")}</p> */}
                </div>
            </Link>
        </div>
    )
}

export default Card;