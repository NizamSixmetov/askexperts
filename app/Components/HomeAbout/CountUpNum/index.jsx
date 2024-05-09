"use client";

import { useRef } from "react";
import CountUp, { useCountUp } from "react-countup";

const CountUpNum = () => {
  const countUpRef = useRef(null);
  useCountUp({
    ref: "countUpRef",
    end: 400,
    // enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  return <CountUp start={0} end={400} />;
};

export default CountUpNum;
