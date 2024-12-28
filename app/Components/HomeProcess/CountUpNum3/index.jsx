"use client";

import React, { useRef } from "react";
import CountUp, { useCountUp } from "react-countup";

const CountUpNum3 = () => {
  const countUpRef = useRef(null);

  useCountUp({
    ref: countUpRef,
    start: 0,
    end: 3,
    enableScrollSpy: true,
  });

  return <span ref={countUpRef}></span>;
};

export default CountUpNum3;
