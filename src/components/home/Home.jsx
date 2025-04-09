import { Canvas } from "@react-three/fiber";
import "./hero.css";
import { motion } from "motion/react";
import Shape from "./Shape";
import { Suspense } from "react";

const awardVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const followVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="hSection left mt-3">
        {/* TITLE */}
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="hTitle"
        >
          Hello World,
          <br />
          <span>I'm Deka!</span>
        </motion.h1>
      </div>
      <div className="hSection right">
        {/* FOLLOW */}
        <motion.div
          variants={followVariants}
          initial="initial"
          animate="animate"
          className="follow mt-5"
        >
          <motion.a
            variants={followVariants}
            href="https://www.instagram.com/dekaroyanto/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/instagram.png" alt="" />
          </motion.a>
          <motion.a
            variants={followVariants}
            href="https://www.facebook.com/deka.royanto.1?mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/facebook.png" alt="" />
          </motion.a>
          <motion.div variants={followVariants} className="followTextContainer">
            <div className="followText">SOCIAL MEDIA</div>
          </motion.div>
        </motion.div>
      </div>
      <div className="bg">
        {/* 3d */}
        <Canvas>
          <Suspense fallback="loading...">
            <Shape />
          </Suspense>
        </Canvas>
        <div className="hImg">
          <img src="/hero.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
