import React from "react";
import styles from "./Card.module.scss"
import Image from "next/image";
import Link from "next/link";
import { IMovie } from "@/interfaces/movie";

const Card = ({ media }: { media: IMovie }) => {
    return (
        <div className={styles.card}>
            <Link href={`movies/${media.id}`}>
                <div className={styles.image}>
                    <Image
                        src={`${process.env.TMDB_IMAGE_BASE_PATH}${media.poster_path}`}
                        alt="Movie Car"
                        fill
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