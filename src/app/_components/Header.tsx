
// import { headerLinks } from '../_assets/data'
// import Link from 'next/link'
// import SideBar from './SideBar'

// export default function Header() {
//   return (
//     <div className='px-10 bg-gradient-to-bl from-blue-700 to-secondary-800 text-card z-10 max-lg:px-8 py-4 flex max-lg:justify-between max-w-[1500px]   lg:gap-72  '>
//       <h1 className='text-4xl font-semibold text-primary '>Amir Zada</h1>
//       <ul className='flex  gap-9 text-sm font-semibold max-lg:hidden'>
//         {
//           !headerLinks.length ? <div>no  headerlinks found</div>:
//           headerLinks.map((links,index)=>
//             <li key={index} className='group text-lg'>
//               <Link 
//                 href={links.href}  
//                 aria-label={`go to ${links.href}`} 
//                 className=''>
//                 {links.label} 
//               </Link>
//               <div className="h-[2px] w-0 group-hover:w-full bg-secondary-500 duration-500"></div>
//             </li>
//           )
//        }
//       </ul>
//       <div className='lg:hidden'>
//         <SideBar headerLinks={headerLinks}/>
//       </div>
     
//     </div>
//   )
// }


import { headerLinks } from '../_assets';
import Link from 'next/link';
import SideBar from './SideBar';

export default function Header() {
  return (
    <div className='sticky top-0 z-50 px-10 bg-gradient-to-bl from-blue-600 to-secondary-700 text-card max-sm:px-4  max-lg:px-8 py-4 flex justify-between max-w-[1500px] items-center'>
      <h1 className='text-4xl max-sm:text-2xl font-semibold text-primary-600 text-shadow'>
        Amir Zada
      </h1>
      <ul className='flex gap-9 text-sm font-semibold max-lg:hidden'>
        {!headerLinks.length ? (
          <div>No header links found</div>
        ) : (
          headerLinks.map((links, index) => (
            <li key={index} className='group text-lg'>
              <Link
                href={links.href}
                aria-label={`go to ${links.href}`}
                className=' hover:text-primary-500 transition-colors duration-300'
              >
                {links.label}
              </Link>
              {/* Hover underline effect */}
              <div className="h-[2px] w-0 group-hover:w-full bg-secondary-500 duration-500"></div>
            </li>
          ))
        )}
      </ul>

     
      <div className='lg:hidden'>
        <SideBar headerLinks={headerLinks} />
      </div>
    </div>
  );
}