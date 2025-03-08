import React from "react";

import Link from "next/link";
import ProjectImages from "./ProjectImages";
import { projectsData } from "@/app/_assets/data";

export default function Projects() {
  return (
    <div id = "projects" className="px-10 max-sm:px-4 mt-20 space-y-20 text-card shadow-[0px_1px_0px_hsl(var(--background-800))] pb-4 md:pb-10 ">
      <div className="relative flex justify-center">
        <h1 className="bg-gradient-to-bl from-blue-600 to-secondary-700  w-fit mx-auto px-4 z-10 py-2 rounded-lg text-card text-2xl">
          Projects
        </h1>
        <div className="absolute mx-auto top-1/2 z-0 text-center bg-gradient-to-bl from-blue-600 to-secondary-700 w-[40%] h-[1px] max-sm:w-[98%]"></div>
      </div>
      {projectsData.map((project, index) => (
        <div
          key={index}
          className="flex max-lg:flex-col-reverse bg-background w-[55rem]  max-lg:w-[40rem] max-md:w-fit ring-1 rounded-2xl ring-background-500  mx-auto"
        >
          <div className="grow text-background-300  space-y-6 p-8 max-sm:p-4 flex flex-col justify-center ">
            <h2 className="text-4xl font-bold">{project.title}</h2>
            <p className="text-lg ">{project.description}</p>
             <div className="space-y-2">
               <h3 className="text-lg font-bold ">Stack</h3>
               <div className="flex gap-2 flex-wrap">
               {project.stack.map((stack,index)=>
               <span  key={index} className="px-4 py-1 rounded-3xl w-fit  ring-1 ring-blue-200">{stack}</span>
              )}
              </div>
             </div>
            <div className="flex gap-4">
              <div className="relative flex  w-44 max-sm:w-full h-10 bg-gradient-to-r  rounded-full from-blue-400 to-secondary-400">
                <Link
                  href="https://simple-calculator-reactjs.vercel.app/"
                  target="_blank"
                  className="bg-background hover:bg-transparent  font-bold rounded-full absolute flex justify-center items-center inset-[2px] "
                >
                  Live Demo
                </Link>
              </div>
              <div className="relative flex  w-44 h-10 max-sm:w-full bg-gradient-to-r  rounded-full from-blue-400 to-secondary-400">
                <Link
                  href="https://simple-calculator-reactjs.vercel.app/"
                  target="_blank"
                  className="bg-background hover:bg-transparent font-bold rounded-full absolute flex justify-center items-center inset-[2px] "
                >
                  GitHub Repo
                </Link>
              </div>
            </div>
          </div>
          <div className="grow w-full  p-4">
            <ProjectImages images={project.images} />
          </div>
        </div>
      ))}
    </div>
  );
}
