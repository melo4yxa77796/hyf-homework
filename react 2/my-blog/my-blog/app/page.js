import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import AstronomyPage from "./components/AstronomyPictureOfTheDay";
import MarsRoverPhotos from "./components/MarsRoverPhotos";
import SearchEpicImage from "./EPIC/epic";
import Navbar from "./components/Navbar";


export default function Home({ params })  {
  return (
    <div>
      <h1>My Blog</h1>
      <Navbar />
<AstronomyPage />
<MarsRoverPhotos />
<SearchEpicImage />

    </div>
         
  );
}
