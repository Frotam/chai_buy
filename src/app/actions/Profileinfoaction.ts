'use server'
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/authoptions";
import { Profilemodel } from "../models/Profileinfo";

export async function saveprofile(formdata:FormData) {
    await mongoose.connect(process.env.MONGODB_URI as string)
    const session=await getServerSession(authOptions)
    if(!session) throw "be logged in "
    const {username,displayName,bio,coverurl,avatar}=Object.fromEntries(formdata);
    const email=session.user?.email
   const profileddoc=await  Profilemodel.findOne({email})
   if(profileddoc){
    profileddoc.set({username,displayName,bio,coverurl,avatar})
    profileddoc.save()
   }else{
    Profilemodel.create({username,displayName,bio,email,avatar,coverurl})
   }
   return true; 
}