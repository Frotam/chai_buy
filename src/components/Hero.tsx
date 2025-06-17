import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Spline from "@splinetool/react-spline";
import { signIn } from "next-auth/react";

export default function Hero() {
  return (
    <main className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]">
        <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0"> 
            <div className="relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full ">
  <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-2 px-4 text-sm sm:text-base">
    <FontAwesomeIcon icon={faMugHot} className="w-5 h-5 text-[#e99b63]" />
    Chaai_BUY
  </div>
</div>

            <h1 data-aos="fade-up"
     data-aos-duration="1500" className=" text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8">
                Get Paid <br/>
                For Your Work
            </h1>
            <p className=" text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem]  lg:max-w-[30rem]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et ab illum saepe quos cum eos.
            </p>

            <div className="flex gap-12 mt-12">
  <a
    href="#"
    className="flex items-center justify-center border border-[#2a2a2a] px-8 sm:px-10 h-12 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] text-white"
  >
    Documentation
  </a>
<a
  href="#"
  onClick={()=>signIn('google')}
  className="flex items-center justify-center whitespace-nowrap border border-[#2a2a2a] px-10 sm:px-14 h-12 rounded-full sm:text-lg text-sm font-semibold transition-all duration-300 bg-gray-300 hover:bg-[#1a1a1a] text-black hover:text-white"
>
  Get Started
</a>       </div>
        </div>

        <Spline data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0"
     data-aos-duration="3000" className=" absolute lg:top top-[5%] bottom-0 lg:left-[15%]  sm:lfet-[-2%] h-full"
        scene="https://prod.spline.design/tEPE7y2172eFm7bg/scene.splinecode" />   
    </main>
  )
  
}
