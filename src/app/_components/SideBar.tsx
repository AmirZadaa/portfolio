
import { Menu} from 'lucide-react'
import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet"


export default function SideBar({ headerLinks }: { headerLinks: { href: string; label: string }[] }) {
  return (
    
    <Sheet >
      <SheetTrigger asChild>
       <button> <Menu/></button>
      </SheetTrigger>
      <SheetContent className='text-card bg-background p-2'>
        <SheetTitle className='text-card'>Nevigation Menu</SheetTitle>
      <ul className='space-y-4 flex flex-col items-start    mt-10  text-sm font-semibold'>
        {
          !headerLinks.length ? <div>no links finds</div>:
          headerLinks.map((links,index)=>
            
            <li key={index}  className='text-xl    bg-background-800  w-full py-[10px]  rounded-lg  '>
              <SheetClose  asChild className='relative w-full h-full' >
              <Link 
                href={links.href}  
                aria-label={`go to ${links.href}`} 
                className='inset-0 flex items-center absolute px-4 text-start '
                >
                {links.label} 
              </Link>
              </SheetClose>
            </li>
           
          
          )
       }
      </ul>
       
      </SheetContent>
    </Sheet>
  )
}

