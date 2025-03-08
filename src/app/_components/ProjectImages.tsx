"use client"
import React from 'react'
import Image from "next/image";
import { StaticImageData } from 'next/image';
import { type CarouselApi } from "@/components/ui/carousel"

import {
  Carousel ,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"



export default function ProjectImages({images}: {images:StaticImageData[]}) {
  const [api, setApi] = React.useState<CarouselApi>()

  React.useEffect(() => {
    if (!api) return
    const interval = setInterval(() => {
      api.scrollNext()
    }, 4000) // Changes slide every 3 seconds

    return () => clearInterval(interval)
  }, [api])

  return (
    <Carousel className="w-[20rem] max-lg:w-full" opts={{
      align: "start",
      loop: true,
      dragFree: true,
      containScroll: "trimSnaps"
      
    }}
    setApi={setApi}
    >
      <CarouselContent className='rounded-2xl'>
        {images.map((image, index) => (
          <CarouselItem key={index} className='rounded-2xl'>
            <div className='w-full aspect-square relative '>
              <Image src={image} fill alt='image' className='rounded-2xl object-cover' />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='-left-4'/>
      <CarouselNext  className='-right-4'/>
    </Carousel>
  )
}
