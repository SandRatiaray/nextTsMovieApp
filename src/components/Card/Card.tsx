import React from "react";
import styles from "./Card.module.scss"
import Image from "next/image";

const Card = () => {
    return (
        <div className={styles.card}>
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
        </div>
    )
}

export default Card;