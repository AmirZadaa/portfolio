import React from "react";

import Link from "next/link";
import ProjectImages from "./ProjectImages";
import { projectsData } from "@/app/_assets";

export default function Projects() {
  return (
    <div id = "projects" className="px-10 max-sm:px-4 mt-20 space-y-20 text-background-200 shadow-[0px_1px_0px_hsl(var(--background-800))] pb-4 md:pb-10 ">
      <div className="relative flex justify-center">
        <h1 className="bg-gradient-to-bl from-blue-600 to-secondary-700  w-fit mx-auto px-4 z-10 py-2 rounded-lg text-cart text-2xl">
          Projects
        </h1>
        <div className="absolute mx-auto top-1/2 z-0 text-center bg-gradient-to-bl from-blue-600 to-secondary-700 w-[40%] h-[1px] max-sm:w-[98%]"></div>
      </div>
      {projectsData.map((project, index) => (
        <div
          key={index}
          className="flex  max-lg:flex-col-reverse bg-background w-[55rem]  max-lg:w-[40rem] max-md:w-fit ring-1 rounded-2xl ring-background-500  mx-auto"
        >
          <div className="grow text-background-300  space-y-6 p-8 max-sm:p-4 flex flex-col justify-center ">
            <h2 className="text-2xl font-bold text-blue-50">{project.title}</h2>
            <p className="text-sm text-justify text-background-200">{project.description}</p>
             <div className="space-y-2">
               <h3 className="text-lg font-bold text-background-200">Stack</h3>
               <div className="flex gap-2 flex-wrap">
               {project.stack.map((stack,index)=>
               <span  key={index} className="px-4 py-1 rounded-3xl w-fit text-background-200  ring-1 ring-blue-200">{stack}</span>
              )}
              </div>
             </div>
            <div className="flex gap-4">
              <div className="relative flex  w-44 max-sm:w-full h-10 bg-gradient-to-r  rounded-full from-blue-400 to-secondary-400">
                <Link
                  href={project.liveLink}
                  target="_blank"
                  className="hover:bg-background bg-transparent text-background-200 duration-500  font-bold rounded-full absolute flex justify-center items-center inset-[2px] "
                >
                  Live Demo
                </Link>
              </div>
              <div className="relative flex  w-44 h-10 max-sm:w-full bg-gradient-to-r  rounded-full from-blue-400 to-secondary-400">
                <Link
                  href={project.gitHub_repo}
                  target="_blank"
                  className="hover:bg-background text-background-200 bg-transparent font-bold rounded-full absolute flex justify-center items-center inset-[2px] duration-500 "
                >
                  GitHub Repo
                </Link>
              </div>
            </div>
          </div>
          <div className="grow flex lg:justify-end  w-full  p-4">
            <ProjectImages images={project.images} />
          </div>
        </div> 
      ))}
    </div>
  );
}
