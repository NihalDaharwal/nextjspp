import React from "react";
import styles from "../styles/common.module.css";
import Image from "next/image";
import Link from "next/link";
const MovieCard = (curElem) => {
  const { id, type, title, synopsis } = curElem.jawSummary;

  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_images}>
          <Image
            src={curElem.jawSummary.backgroundImage.url}
            alt={title}
            width={250}
            height={200}
          />
        </div>
        <div className={styles.card_data}>
          <h2>{title.substring(0, 18)}</h2>
          <p>{`${synopsis.substring(0, 66)} ...`}</p>
        </div>
        <Link href={`/movie/${id}`}>
          <button className="">Read More</button>
        </Link>
      </div>
    </>
  );
};

export default MovieCard;
