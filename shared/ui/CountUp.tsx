"use client";

import { memo, useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "motion/react";

interface CountUpProps {
  to: number;
  from?: number;
  direction?: "up" | "down";
  delay?: number;
  duration?: number;
  className?: string;
  startWhen?: boolean;
  separator?: string;
  decimalPartLength?: number;
  prefix?: string;
  postfix?: string;
  onStart?: () => void;
  onEnd?: () => void;
  onUpdate?: (value: string) => void;
}

export const CountUp = memo(
  ({
    to,
    from = 0,
    direction = "up",
    delay = 0,
    duration = 2, // Duration of the animation in seconds
    className = "",
    startWhen = true,
    separator = "",
    decimalPartLength = 0,
    prefix = "",
    postfix = "",
    onStart,
    onEnd,
    onUpdate,
  }: CountUpProps) => {
    const spanRef = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(direction === "down" ? to : from);

    // Calculate damping and stiffness based on duration
    const damping = 20 + 40 * (1 / duration); // Adjust this formula for finer control
    const stiffness = 100 * (1 / duration); // Adjust this formula for finer control

    const springValue = useSpring(motionValue, {
      damping,
      stiffness,
    });

    const isInView = useInView(spanRef, { once: true, margin: "0px" });

    // Set initial text content to the initial value based on direction
    useEffect(() => {
      if (spanRef.current) {
        spanRef.current.textContent = String(direction === "down" ? to : from);
      }
    }, [from, to, direction]);

    // Start the animation when in view and startWhen is true
    useEffect(() => {
      if (isInView && startWhen) {
        if (typeof onStart === "function") {
          onStart();
        }

        const timeoutId = setTimeout(() => {
          motionValue.set(direction === "down" ? from : to);
        }, delay * 1000);

        const durationTimeoutId = setTimeout(
          () => {
            if (typeof onEnd === "function") {
              onEnd();
            }
          },
          delay * 1000 + duration * 1000,
        );

        return () => {
          clearTimeout(timeoutId);
          clearTimeout(durationTimeoutId);
        };
      }
    }, [isInView, startWhen, motionValue, direction, from, to, delay, onStart, onEnd, duration]);

    // Update text content with formatted number on spring value change
    useEffect(() => {
      const unsubscribe = springValue.on("change", (latest) => {
        if (spanRef.current) {
          const options = {
            minimumFractionDigits: decimalPartLength,
            maximumFractionDigits: decimalPartLength + 1,
          };

          const formattedNumber = Intl.NumberFormat("en-US", options).format(
            Number(latest.toFixed(decimalPartLength)),
          );

          const finalValue = separator ? formattedNumber.replace(/,/g, separator) : formattedNumber;

          onUpdate?.(prefix + finalValue + postfix);

          spanRef.current.textContent = prefix + finalValue + postfix;
        }
      });

      return () => unsubscribe();
    }, [springValue, separator, decimalPartLength, onUpdate, postfix]);

    return <span className={`${className}`} ref={spanRef} />;
  },
);
CountUp.displayName = "CountUp";
