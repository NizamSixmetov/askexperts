"use client";

import CountUp, { useCountUp } from "react-countup";
const CountUpNum3 = () => {
  useCountUp({
    ref: "counter",
    end: 3,
    enableScrollSpy: true,
    scrollSpyDelay: 10,
  });
  return <CountUp start={0} end={3} enableScrollSpy />;
};

export default CountUpNum3;