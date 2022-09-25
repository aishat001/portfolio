import React, { useEffect, useState } from 'react';
import "./Loader.scss"
import { motion } from 'framer-motion';

const LoaderVariant = {
    initial: { left: "-100vw" },
    animate: {
      left: "0",
      transition: { duration: 2.3, type: "tween", ease: "linear" },
    },
  };

const Loader = () => {
    const [count, setCount] = useState(0);
    const [test, setTest] = useState(true);
  
    useEffect(() => {
      let counter = setInterval(() => {
        setCount(count + 1);
        if (count === 100) {
          setCount(100);
          setTest(true);
        }
      }, 20);
      return () => clearInterval(counter);
    });


  return (
  <>
        <div className="overlay">

</div>
         <div className="loader-container">
        <div className="loader-wrap">
          <div className='welcome'>
            <span>L</span>
            <span>o</span>
            <span>a</span>
            <span>d</span>
            <span>i</span>
            <span>n</span>
            <span>g</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>

          </div>
         <motion.div
            className="loader-bar"
            variants={LoaderVariant}
            initial="initial"
            animate="animate"
          ></motion.div>
          
          <motion.div
            className="counter"
            variants={LoaderVariant}
            initial={{ left: 0 }}
            animate={{ left: "93%" }}
            transition={{ duration: 2.3, ease: "linear" }}
          >
            <h3>{test && count}%</h3>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Loader
