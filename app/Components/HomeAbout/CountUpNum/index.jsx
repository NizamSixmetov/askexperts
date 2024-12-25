"use client";

import CountUp, { useCountUp } from "react-countup";

const CountUpNum = () => {
  useCountUp({
    ref: "counter",
    end: 400,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  return <CountUp start={0} end={400} enableScrollSpy />;
};

export default CountUpNum;

// import React from 'react'

// const index = () => {
//   return (
//     <>index</>
//   )
// }

// export default index