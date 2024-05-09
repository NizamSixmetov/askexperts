"use client";

import CountUp, { useCountUp } from "react-countup";
const CountUpNum2 = () => {
  useCountUp({
    ref: "counter",
    end: 2,
    // enableScrollSpy: true,
    scrollSpyDelay: 10,
  });
  return <CountUp start={0} end={2} />;
};

export default CountUpNum2;
