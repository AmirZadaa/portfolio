import React from 'react'
import {  swtLogo } from "../_assets/images";
import { Calendar, MapPin } from "lucide-react";
import Image from 'next/image';


export default function Eduction() {
  return (
    <div className="grow space-y-4">
    <h2 className="text-2xl font-semibold ">Education</h2>
    <div>
      <div className="flex justify-between border-b-[1px] border-background-300 pb-4 max-sm:flex-col max-lg:gap-8 ">
        <div className="space-y-2">
        <h3 className="text-xl font-bold  text-primary-600">Software Engineer</h3> 
          <div className="flex items-center  gap-4">
          <div className='rounded-full w-8 aspect-square  relative'>
           <Image src={swtLogo} fill alt="logo" className='object-cover rounded-full' sizes="32px" />
            </div>
            <span className="text-sm ">University of swat</span>
            <MapPin size={18} className='fill-secondary-300'/>
            <span className="text-sm ">Swat</span>
          </div>
        </div>
        <div className="space-y-2 flex flex-col">
          <div className="flex gap-2">
            <Calendar  size={18}/>
            <span className="text-sm">Session (2019-2023)</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
