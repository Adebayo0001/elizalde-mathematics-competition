"use client";
import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface ScrollRevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
}

export function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  distance = 30,
  className = "",
  ...props
}: ScrollRevealProps) {
  const getInitialY = () => {
    if (direction === "up") return distance;
    if (direction === "down") return -distance;
    return 0;
  };

  const getInitialX = () => {
    if (direction === "left") return distance;
    if (direction === "right") return -distance;
    return 0;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: getInitialY(), x: getInitialX() }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className = "",
  delayChildren = 0,
  staggerChildren = 0.15,
  ...props
}: HTMLMotionProps<"div"> & { delayChildren?: number; staggerChildren?: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren,
            staggerChildren,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps extends HTMLMotionProps<"div"> {
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
}

export function StaggerItem({
  children,
  className = "",
  direction = "up",
  distance = 30,
  ...props
}: StaggerItemProps) {
  const getInitialY = () => {
    if (direction === "up") return distance;
    if (direction === "down") return -distance;
    return 0;
  };

  const getInitialX = () => {
    if (direction === "left") return distance;
    if (direction === "right") return -distance;
    return 0;
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: getInitialY(), x: getInitialX() },
        visible: {
          opacity: 1,
          y: 0,
          x: 0,
          transition: { duration: 0.7, ease: "easeOut" },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

