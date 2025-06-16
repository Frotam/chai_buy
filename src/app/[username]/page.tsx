
'use server'
import mongoose from "mongoose";
import { Profilemodel } from "../models/Profileinfo";
import Error404page from "@/components/404page";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Donationform from "./Donationform";

type Props={  
  params:{ username:string}
}
async function Page({params}:Props) {
    const username=params?.username;
    await mongoose.connect(process.env.MONGODB_URI as string)
    const profileinfo=await Profilemodel.findOne({username})
    if(!profileinfo){
        return <Error404page/>
    }
    else{
        return (
          <div>
            <div className="w-full h-48">
              <Image src={profileinfo.coverurl}
              width={2048}
              height={2048}
              alt="cover image"
              className=" object-cover  object-center h-48"
              />

             
      
            </div>
          
          
            <div className="max-w-2xl px-2 mx-auto relative -mt-16">
        <div className="flex items-end gap-3">
          <div className="size-36 overflow-hidden rounded-xl border-2 border-white">
            <Image
              src={profileinfo.avatar}
              width={256}
              height={256}
              alt="cover image"
              className="size-36 object-cover object-center"
            />
          </div>
          <div>
          <h1 className="text-xl font-semibold "
          >{profileinfo.displayName}</h1>
          <h2 className=" bg-gray-800 rounded-2xl p-1"><FontAwesomeIcon icon={faCoffee}/>/ {profileinfo.username}</h2>
          </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">

            <div className="bg-gray-800 rounded-xl p-4">

          <h3 className=" font-semibold">About  {profileinfo.username}</h3>
          {profileinfo.bio}
          <hr/>
          <h3 className=" font-semibold">Recent Suppoters </h3>

            </div>
            <div  className="bg-gray-800 rounded-xl p-4">
              
              <Donationform email={profileinfo.email} _id={String(profileinfo._id)}/>
            </div>
          </div>

          </div>


          </div>
        )
    }
}

export default Page