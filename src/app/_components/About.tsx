"use client";

import {  zada } from "../_assets/images";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.intersectionRatio) {
        setIsVisible(true);
      }
    });

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <div
      id = "about"
      ref={elementRef}
      className={`mt-10  ${
        isVisible ? "fadeup" : "opacity-0"
      } py-10 shadow-[0px_1px_0px_hsl(var(--background-800))]`}
      >
      <div className="grid grid-cols-2 max-lg:gap-4 px-10 max-sm:px-0 max-lg:grid-cols-1 ">
        <div className="space-y-6 pt-10 max-lg:order-2">
          <h1 className="text-primary-600 font-semibold text-2xl max-lg:text-center ">WHO I AM</h1>
          <p className="text-justify text-card max-lg:w-[80%] max-lg:mx-auto max-sm:w-[90%] ">
            I&#39;m <b>Frontend Developer</b> with a strong focus on building <b>Scalable </b>
            and <b>Efficient Web Applications</b>. With expertise in JavaScript and a
            commitment to Continuous learning, I enjoy tackling new challenges
            in both <b>Frontend </b>and  <b>Backend</b> development. I&#39;m open to
            opportunities that offer growth and innovation in web development.
          </p>
        </div>

        <div className="flex  justify-center items-center max-lg:order-1">
        <div className="w-44 aspect-[1/1] rounded-full relative">
          <Image
            src={zada}
            alt="amir1"
            fill
            className="object-cover border-[1px] hover:scale-110 rounded-full duration-700"
          />
        </div>
        </div>
      </div>
    </div>
  );
}

