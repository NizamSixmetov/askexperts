"use client";

import React, { useEffect, useState, useRef } from "react";
import styles from "./styles.module.css";
import axios from "axios";
import { useCountUp } from "react-countup";
import Loader from "../Loader/Loader";

const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/projectNumber/`;

function ProjectNumber() {
  const [mockData, setMockData] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setMockData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="container">
      <div className={`${styles.flexDiv}`}>
        {mockData.length > 0 ? (
          mockData.map(({ id, cap, description }) => (
            <div className={`${styles.numberCard}`} key={id}>
              <p className={`${styles.capDiv}`}>
                <CountUpWithRef end={cap} /> +
              </p>
              <p className={`${styles.descriptionDiv}`}>{description}</p>
            </div>
          ))
        ) : (
          <Loader />
        )}
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
