"use client";

import CountUp, { useCountUp } from "react-countup";
const CountUpNum1 = () => {
  useCountUp({
    ref: "counter",
    end: 1,
    enableScrollSpy: true,
    scrollSpyDelay: 10,
  });
  return <CountUp start={0} end={1} enableScrollSpy />;
};

export default CountUpNum1;
