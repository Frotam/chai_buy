import mongoose from "mongoose"
import { DonationModel } from "../models/Donation"

export default async function createdonation(formData:FormData):Promise<string> {
    const {amount,name,message,crypto}=Object.fromEntries(formData)
    await mongoose.connect(process.env.MONGODB_URI as string)
    const donationdoc=await DonationModel.create({
amount,name,message,crypto
    })
    const endpoint='https://api.cryptomus.com/'
    console.log(amount,name,message,crypto)
  return ''
}
