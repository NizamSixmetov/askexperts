"use client";

import React, { useRef } from "react";
import CountUp, { useCountUp } from "react-countup";

const CountUpNum1 = () => {
  const countUpRef = useRef(null);

  useCountUp({
    ref: countUpRef,
    start: 0,
    end: 1,
    enableScrollSpy: true,
  });

  return <span ref={countUpRef}></span>;
};

export default CountUpNum1;
