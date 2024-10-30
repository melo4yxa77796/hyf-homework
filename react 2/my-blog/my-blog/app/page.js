import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import AstronomyPage from "./components/AstronomyPictureOfTheDay";

export default function Home()  {
  return (
    <div>
      <h1>My Blog</h1>
<AstronomyPage />
    </div>
         
  );
}
