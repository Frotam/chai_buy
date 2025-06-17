'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { signIn, signOut } from "next-auth/react";
import { Session } from "next-auth";
export default function Navbar({session}:{session:Session|null}) {
    const toggle=()=>{
       const mobilemenu= document.getElementById('mobilemenu')
        if(mobilemenu.classList.contains('hidden')){
            mobilemenu.classList.remove('hidden')
        }else{
             mobilemenu.classList.add('hidden')
        }
    }
  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20">
        <h1 data-aos="fade-up"
     data-aos-duration="1500" className="text-3xl md:text-4xl lg:text-5xl font-bold m-0">Chai Buy</h1>

        <nav className="hidden md:flex items-center gap-12">
            <a href="#" data-aos="fade-up"
     data-aos-duration="1000" className=" text-base tracking-wider transition-colors hover:text-gray-300 z-50">About</a>
            <a href="#" data-aos="fade-up"
     data-aos-duration="1500" className=" text-base tracking-wider transition-colors hover:text-gray-300 z-50">FnQ</a>
            <a href="#" data-aos="fade-up"
     data-aos-duration="2000" className=" text-base tracking-wider transition-colors hover:text-gray-300 z-50">Contact</a>
            <a href="#" data-aos="fade-up"
     data-aos-duration="2500" className=" text-base tracking-wider transition-colors hover:text-gray-300 z-50">Docs</a>
        </nav>
        {!session?(<>
        <button onClick={()=>signIn('google')} className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium
         transition-all duration-500 hover:bg-white cursor-pointer z-50">SIGNIN</button>
        </>):(<>
         <button onClick={()=>signOut()} className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium
         transition-all duration-500 hover:bg-white cursor-pointer z-50">Log Out</button>
        </>)}

        
        <button onClick={toggle} className="md:hidden text-3xl p-2 z-50 ">
        <FontAwesomeIcon icon={faBars}/>
        </button>
        <div id="mobilemenu" className="hidden fixed top-16 bottom-0 right-0 p-5 md:hidden z-40 bg-black bg-opacity-70">
            <nav className="flex flex-col gap-6 items-center">
            <a href="#" data-aos="fade-up"
     data-aos-duration="1000" className=" text-base tracking-wider transition-colors hover:text-gray-300 z-50">About</a>
            <a href="#" data-aos="fade-up"
     data-aos-duration="1500" className=" text-base tracking-wider transition-colors hover:text-gray-300 z-50">FnQ</a>
            <a href="#" data-aos="fade-up"
     data-aos-duration="2000" className=" text-base tracking-wider transition-colors hover:text-gray-300 z-50">Contact</a>
            <a href="#"  data-aos="fade-up"
     data-aos-duration="2500"className=" text-base tracking-wider transition-colors hover:text-gray-300 z-50">Docs</a>
        
            </nav>
        </div>

    </header>

  )
}
