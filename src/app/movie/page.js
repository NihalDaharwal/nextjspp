import Link from "next/link";
import React from "react";
import MovieCard from "../components/MovieCard";
import styles from "../styles/common.module.css";

const page = async () => {
  // const url = "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en";

  await new Promise((resolve) => setTimeout(resolve, 2000));

  const url = process.env.RAPID_KEY;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "1ccd7ae51cmshbc15589ecab358cp17a1f5jsn3e4e92d5eb70",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;
  console.log(data);

  return (
    <>
      {/* <h1>Movies</h1> */}
      {/* <Link href="/movie/asdf">go to</Link> */}
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series & Movies</h1>
          <div className={styles.card_section}>
            {main_data.map((curElem) => {
              return <MovieCard key={curElem.id} {...curElem} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
