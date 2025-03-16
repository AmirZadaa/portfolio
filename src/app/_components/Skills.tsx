import SkillCard from "./SkillCard";


export default function Skills() {
  return (
    <div id="skills" className="container mx-auto space-y-16  pt-10 lg:pt-20 max-sm:mt-4 border-b-[2px] border-background-800 pb-4 md:pb-10 ">
      <div className="relative flex justify-center">
        <h1 className="bg-gradient-to-bl from-blue-600 to-secondary-700 w-fit mx-auto px-4 z-10 py-2 rounded-lg text-card text-2xl">
          Skills
        </h1>
        <div className="absolute mx-auto top-1/2 z-0 text-center bg-gradient-to-bl from-blue-600 to-secondary-700  w-[40%] h-[1px] max-sm:w-[90%]"></div>
      </div>
     <SkillCard/>
    </div>
  );
}
