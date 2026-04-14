"use client";

import { LazyMotion, MotionConfig, domAnimation } from "motion/react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict={true}>
        {children}
      </LazyMotion>
    </MotionConfig>
  );
};

export default Providers;
