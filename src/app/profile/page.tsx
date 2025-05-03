'use server'
import Profileinforform from "@/components/Profileinforform"
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/authoptions";
import mongoose, { Mongoose } from "mongoose";
import { Profilemodel } from "../models/Profileinfo";

export default async function Home() {
  const session=await getServerSession(authOptions)
  if(!session||!session.user?.email ){
    console.log(session?.user?.email)
    return "Not looged in"
  }
  const email=session.user?.email
  const image=session.user?.image
  console.log(image)
  await mongoose.connect(process.env.MONGODB_URI as string)
  const profileInfodoc=JSON.parse(JSON.stringify(await Profilemodel.findOne({email})))
  return (
    <>
      <div className="max-w-2xl mx-auto px-4">
      <Profileinforform profileinfo={profileInfodoc} avatar={image}></Profileinforform>
            <div>
              Donation list 
            </div>
      </div>
    </>
  );
}
