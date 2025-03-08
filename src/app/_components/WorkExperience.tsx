import React from 'react'
import { NexusFaviIcon } from "../_assets/images";
import { Calendar, MapPin } from "lucide-react";
import Image from 'next/image';
export default function WorkExperience() {
  return (
    <div className="grow space-y-4">
    <h2 className="text-2xl font-semibold ">Work Experience</h2>
    <div>
      <div className="flex justify-between border-b-[1px] border-background-300 pb-4  max-sm:flex-col max-lg:gap-8">
        <div className="space-y-2">
        <h3 className="text-xl font-bold  text-primary-600">Fronted Developer</h3> 
          <div className="flex items-center  gap-4">
            <div className='rounded-full w-8 aspect-square  relative'>
            <Image src={NexusFaviIcon} fill alt="place" className='object-cover rounded-full' sizes='32px' />
            </div>
            <span className="text-sm ">NexusBerry Training and solutions.</span>
            <MapPin size={18} className='fill-secondary-300'/>
            <span className="text-sm ">Lahore</span>
          </div>
        </div>
        <div className="space-y-2 flex flex-col">
          <div className=" w-fit bg-background text-sm text-primary-600 font-bold rounded-2xl px-4 py-1 ">
            FULL TIME
          </div>
          <div className="flex gap-2">
            <Calendar size={18} />
            <span className="text-sm">November 2024-Present</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
