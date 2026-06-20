import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const Counter = ({ end, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const endValue = parseInt(end.toString().replace(/,/g, ''), 10);
      if (start === endValue) return;

      const incrementTime = (duration / endValue) * 1000;
      let timer = setInterval(() => {
        start += Math.ceil(endValue / 100);
        if (start > endValue) start = endValue;
        setCount(start);
        if (start === endValue) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [end, duration, isInView]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export default Counter;
