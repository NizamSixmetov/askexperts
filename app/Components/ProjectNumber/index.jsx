"use client";

import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import axios from "axios";
import CountUp, { useCountUp } from "react-countup";

const url = "http://localhost:3000/api/projectNumber/";

function ProjectNumber() {
  const [mockData, setMockData] = useState([]);
  useEffect(() => {
    axios.get(url).then((response) => {
      setMockData(response.data);
    });
  }, []);
  let startNum = 0;

  useCountUp({
    ref: "counter",
    end: 1,
    // enableScrollSpy: true,
    scrollSpyDelay: 10,
  });
  return (
    <div className="container">
      <div className={`${styles.flexDiv}`}>
        {mockData.map(({ id, cap, description }) => {
          return (
            <div className={`${styles.numberCard}`} key={id}>
              <p className={`${styles.capDiv}`}>
                <CountUp start={startNum} end={cap} /> +
              </p>
              <p className={`${styles.descriptionDiv}`}>{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectNumber;
