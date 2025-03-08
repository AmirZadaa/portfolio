// import { amir3 } from "../_assets/images";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
export default function Hero() {
  return (
    <div
      id = "home"
      className="lg:h-screen max-lg:py-4  max-sm:mt-4 flex gap-10 justify-center items-center px-10 max-lg:flex-col-reverse max-sm:px-4 shadow-[0px_1px_0px_hsl(var(--background-800))]"
    >
      <div className="space-y-8   grow">
        <h1 className="text-xl mx-auto  text-card max-sm:text-center xs:text-lg  w-fit leading-[30px] sm:leading-[50px] sm:text-4xl font-bold">
          Salam,
          <br />
          I&apos;m <span className="text-secondary">Amir Zada</span>,
          <br />{" "}
          <span className="typewritter block text-primary-600">
            an Experienced Frontend Developer.
          </span>
        </h1>
        <div className="flex gap-4 max-sm:justify-center">
          <MapPin size={18} className="fill-secondary-300  " />
          <span className="text-sm text-card ">Lahore , Punjab , Pakistan</span>
        </div>
        <div className="flex gap-4  max-sm:justify-center">
          <span className="bg-secondary px-1 py-1 rounded-full hover:scale-125 duration-500">
            <Github className="fill-black stroke" />
          </span>
          <span className="bg-secondary px-1 py-1 rounded-full hover:scale-125 duration-500">
            <Linkedin className="fill-black " />
          </span>
        </div>
        <div className="flex gap-4 max-xs:gap-4 max-sm:mx-auto">
          <div className="relative  bg-gradient-to-bl from-blue-600 to-secondary-700 rounded-full  p-[2px]">
            <Button className="rounded-full text-card absolut inset-0 bg-black px-10  font-bold">
              <Link href={"#contact"} aria-label="go contact me">
                CONTACT ME
              </Link>
            </Button>
          </div>
          <div className="relative   bg-gradient-to-r from-blue-600 to-secondary  rounded-full  p-[2px]">
            <Button className="rounded-full text-card absolut inset-0 bg-black px-10  font-bold">
              <Link href={"#"} aria-label="go contact me">
                GET RESUME
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="grow">
        <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]"><div className="flex flex-row"><div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div><div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div></div><div className="px-4 lg:px-8 py-5"><div className="flex flex-row space-x-2"><div className="h-3 w-3 rounded-full bg-red-400"></div><div className="h-3 w-3 rounded-full bg-orange-400"></div><div className="h-3 w-3 rounded-full bg-green-200"></div></div></div><div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8"><code className="font-mono text-xs md:text-sm lg:text-base"><div className="blink"><span className="mr-2 text-pink-500">const</span><span className="mr-2 text-card">coder</span><span className="mr-2 text-pink-500">=</span><span className="text-gray-400">{"{"}</span></div><div><span className="ml-4 lg:ml-8 mr-2 text-card">name:</span><span className="text-gray-400">&#39;</span><span className="text-amber-300">Amir zada</span><span className="text-gray-400">&#39;,</span></div><div className="ml-4 lg:ml-8 mr-2"><span className=" text-card">skills: </span><span className="text-gray-400">[&#39;</span><span className="text-amber-300">React</span><span className="text-gray-400">&#39;, &#39;</span><span className="text-amber-300">NextJS</span><span className="text-gray-400">&#39;, &#39;</span><span className="text-amber-300">Tailwind</span><span className="text-gray-400">&#39;, &#39;</span><span className="text-amber-300">Shadcn</span><span className="text-gray-400">&#39;, &#39;</span><span className="text-amber-300">Git</span><span className="text-gray-400">&#39;, &#39;</span><span className="text-amber-300">Bootstrap</span><span className="text-gray-400">&#39;, &#39;</span><span className="text-amber-300">MongoDB</span><span className="text-gray-400">&#39;, &#39;</span><span className="text-amber-300">Node Js</span><span className="text-gray-400">&#39;, &#39;</span><span className="text-amber-300">Express NextJS</span><span className="text-gray-400">&#39;],</span></div><div><span className="ml-4 lg:ml-8 mr-2 text-card">hardWorker:</span><span className="text-orange-400">true</span><span className="text-gray-400">,</span></div><div><span className="ml-4 lg:ml-8 mr-2 text-card">quickLearner:</span><span className="text-orange-400">true</span><span className="text-gray-400">,</span></div><div><span className="ml-4 lg:ml-8 mr-2 text-card">problemSolver:</span><span className="text-orange-400">true</span><span className="text-gray-400">,</span></div><div><span className="ml-4 lg:ml-8 mr-2 text-green-400">hireable:</span><span className="text-orange-400">function</span><span className="text-gray-400">{"() {"}</span></div><div><span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span><span className="text-gray-400">(</span></div><div><span className="ml-12 lg:ml-24 text-cyan-400">this.</span><span className="mr-2 text-card">hardWorker</span><span className="text-amber-300">&amp;&amp;</span></div><div><span className="ml-12 lg:ml-24 text-cyan-400">this.</span><span className="mr-2 text-card">problemSolver</span><span className="text-amber-300">&amp;&amp;</span></div><div><span className="ml-12 lg:ml-24 text-cyan-400">this.</span><span className="mr-2 text-card">skills.length</span><span className="mr-2 text-amber-300">&gt;=</span><span className="text-orange-400">5</span></div><div><span className="ml-8 lg:ml-16 mr-2 text-gray-400">);</span></div><div><span className="ml-4 lg:ml-8 text-gray-400">{"};"}</span></div><div><span className="text-gray-400">{"};"}</span></div></code></div></div>
      </div>
  </div>  
  );
}
