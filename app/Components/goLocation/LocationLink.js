"use client";

import { useState } from "react";

const LocationLink = () => {
  const [latitude, setLatitude] = useState("45.2497341");
  const [longitude, setLongitude] = useState("19.788877");

  const handleMapClick = () => {
    window.open(
      `https://www.google.com/maps?q=${latitude},${longitude}`,
      "_blank"
    );
  };

  return <p onClick={handleMapClick}>725 Park Ave, New York</p>;
};

export default LocationLink;
