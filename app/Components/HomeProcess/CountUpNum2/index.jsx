"use client";

import CountUp, { useCountUp } from "react-countup";
const CountUpNum2 = () => {
  useCountUp({
    ref: "counter",
    end: 2,
    enableScrollSpy: true,
    scrollSpyDelay: 10,
  });
  return <CountUp start={0} end={2} enableScrollSpy />;
};

export default CountUpNum2;


// import React from 'react'

// const index = () => {
//   return (
//     <>index</>
//   )
// }

// export default index