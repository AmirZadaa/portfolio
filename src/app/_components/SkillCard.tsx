import React from "react";
import Image from "next/image";
import { skills } from "../_assets/data";
export default function SkillCard() {
  return (
<div className="overflow-hidden mx-auto  text-card py-4 w-[95%] ">
      <div className="flex group    gap-4 mx-auto ">
            <div  className="flex gap-4   group-hover:[animation-play-state:paused] marquee   ">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="relative  bg-gradient-to-br from-blue hover:scale-110 duration-500 to-secondary w-44 gap-2 aspect-square flex-shrink-0 rounded-xl "
                >
                  <div className="absolute bg-background inset-[2px] flex flex-col items-center gap-5 justify-center">
                    <div className="w-12 aspect-square relative">
                      <Image src={skill.img} fill alt={skill.title} />
                    </div>
                    <h1 className="font-bold text-lg">{skill.title}</h1>
                  </div>
                </div>
              ))}
            </div>

            <div  className="flex gap-4 marquee group-hover:[animation-play-state:paused] ">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="relative  bg-gradient-to-br from-blue hover:scale-110 duration-500 to-secondary w-44 gap-2 aspect-square flex-shrink-0 rounded-xl "
                >
                  <div className="absolute bg-background inset-[2px] flex flex-col items-center gap-5 justify-center">
                    <div className="w-12 aspect-square relative">
                      <Image src={skill.img} fill alt={skill.title} />
                    </div>
                    <h1 className="font-bold text-lg">{skill.title}</h1>
                  </div>
                </div>
              ))}
            </div>
      </div>
    </div>
  );
}
