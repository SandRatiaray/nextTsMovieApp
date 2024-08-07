import React from "react";
import styles from "./Card.module.scss"
import Image from "next/image";
import Link from "next/link";

const Card = ({ mediaId }: { mediaId: string }) => {
    return (
        <div className={styles.card}>
            <Link href={`movies/${mediaId}`}>
                <div className={styles.image}>
                    <Image
                        src="https://image.tmdb.org/t/p/w500/cvsXj3I9Q2iyyIo95AecSd1tad7.jpg"
                        alt="Movie Car"
                        fill
                    />
                </div>
                <div className={styles.content}>
                    <h2>Creed III</h2>
                    <p>Le 01/03/2023</p>
                </div>
            </Link>
        </div>
    )
}

export default Card;