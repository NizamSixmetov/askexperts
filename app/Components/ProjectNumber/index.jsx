"use client";

import React, { useEffect, useState, useRef } from "react";
import styles from "./styles.module.css";
import axios from "axios";
import { useCountUp } from "react-countup";

const url = `https://askexpressdata.vercel.app/projectNumber/`;

function ProjectNumber() {
  const [mockData, setMockData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setMockData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <div className={`${styles.flexDiv}`}>
        {mockData.map(({ id, cap, description }) => (
          <div className={`${styles.numberCard}`} key={id}>
            <p className={`${styles.capDiv}`}>
              <CountUpWithRef end={cap} /> +
            </p>
            <p className={`${styles.descriptionDiv}`}>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const CountUpWithRef = ({ end }) => {
  const countUpRef = useRef(null);

  useCountUp({
    ref: countUpRef,
    start: 0,
    end,
    enableScrollSpy: true,
    scrollSpy: true,
  });

  return <span ref={countUpRef}></span>;
};

export default ProjectNumber;
