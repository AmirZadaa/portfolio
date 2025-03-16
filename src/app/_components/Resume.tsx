import React from "react";
// import Image from "next/image";
// import { amir1 } from "../_assets/images";
import WorkExperience from "./WorkExperience";
import Education from "./Education";


export default function Resume() {
  return (
    <div id = "resume"  className="container mx-auto border-b-[2px] border-background-800 md:pb-10 pb-4">
    <div className="space-y-10  text-card px-10 py-6 max-sm:px-4 mt-20 max-sm:mt-10  w-[98%]  mx-auto">
       <div className="relative flex justify-center">
        <h1 className="bg-gradient-to-bl from-blue-600 to-secondary-700  w-fit mx-auto px-4 z-10 py-2 rounded-lg text-card text-2xl">
           Resume
        </h1>
        <div className="absolute mx-auto top-1/2 z-0 text-center bg-gradient-to-bl from-blue-600 to-secondary-700  w-[40%] h-[1px] max-sm:w-[98%]"></div>
      </div>
      <div className="pt-10">
        <div className="grow space-y-10">
        <WorkExperience />
        <Education/>
        </div>
      </div>
    </div>
    </div>
  );
}
