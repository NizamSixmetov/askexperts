"use client";
import CountUp, { useCountUp } from "react-countup";

const CountUpNum = () => {
  useCountUp({
    ref: "counter",
    end: 400,
    enableScrollSpy: true,
    scrollSpyDelay: 10,
  });
  return <CountUp start={0} end={400} enableScrollSpy />;
};

export default CountUpNum;
