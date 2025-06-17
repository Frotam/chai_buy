import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Homepage() {
    useEffect(()=>{
        AOS.init({
            duration:1500,
            once:true,
        })
    })
  return (
   <main>
    <img src="/gradient.png" className='absolute top-0 right-0 opacity-60 -z-10' alt="" />
   <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] rotate-[-30deg] shadow-[0_0_900px_20px_#e99b63]"></div>
    <Navbar></Navbar>
    <Hero></Hero>
  </main>
  )
}
