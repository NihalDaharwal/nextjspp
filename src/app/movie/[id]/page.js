import React from "react";
import styles from "../../styles/common.module.css";
import Image from "next/image";
const page = async ({ params }) => {
  const id = params.id;

  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "1ccd7ae51cmshbc15589ecab358cp17a1f5jsn3e4e92d5eb70",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data[0].details;
  console.log(data);

  return (
    <>
      {/* <h1>dynamic route page {id}</h1> */}

      <div className={styles.container}>
        <h2 className={styles.movie_title}>
          Netflix \ <span>{main_data.type}</span>
        </h2>
        <div className={styles.card_section}>
          <Image
            src={main_data.backgroundImage.url}
            alt={main_data.title}
            width={600}
            height={300}
          />
        </div>
        <h1>{main_data.title}</h1>
        <p>{main_data.synopsis}</p>
      </div>
    </>
  );
};

export default page;
