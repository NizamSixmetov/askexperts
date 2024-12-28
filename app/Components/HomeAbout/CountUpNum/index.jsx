"use client";

import React, { useRef } from "react";
import CountUp, { useCountUp } from "react-countup";

const CountUpNum = () => {
  const countUpRef = useRef(null);

  useCountUp({
    ref: countUpRef,
    start: 0,
    end: 400,
    enableScrollSpy: true,
    scrollSpy: true,
  });

  return <span ref={countUpRef}></span>;
};

export default CountUpNum;
