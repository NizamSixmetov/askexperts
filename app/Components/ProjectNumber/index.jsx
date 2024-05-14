"use client";

import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import axios from "axios";
import CountUp, { useCountUp } from "react-countup";

const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/projectNumber/`;

function ProjectNumber() {
  const [mockData, setMockData] = useState([]);
  useEffect(() => {
    async function fetchPlans() {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/projectNumber/`); // Replace with your actual endpoint
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMockData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchPlans();

  }, []);
  // let startNum = 0;

  // useCountUp({
  //   ref: "counter",
  //   end: 1,
  //   enableScrollSpy: true,
  //   scrollSpyDelay: 10,
  // });
  return (
    <div className="container">
      <div className={`${styles.flexDiv}`}>
        {mockData.map(({ id, cap, description }) => {
          return (
            <div className={`${styles.numberCard}`} key={id}>
              <p className={`${styles.capDiv}`}>
                {/* <CountUp start={startNum} end={cap} enableScrollSpy /> + */}
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
