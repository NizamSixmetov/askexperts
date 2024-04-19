"use client";
import styles from "./style.module.css";
import { useState } from "react";

const LocationLinkFooter = () => {
  const [latitude, setLatitude] = useState("45.2497341");
  const [longitude, setLongitude] = useState("19.788877");

  const handleMapClick = () => {
    window.open(
      `https://www.google.com/maps?q=${latitude},${longitude}`,
      "_blank"
    );
  };

  return (
    <p className={`${styles.pElement}`} onClick={handleMapClick}>
      1700 W Blancke St, kiyev port south USA, America
    </p>
  );
};

export default LocationLinkFooter;
