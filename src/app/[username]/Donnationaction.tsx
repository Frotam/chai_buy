import mongoose from "mongoose";
import { DonationModel } from "../models/Donation";
import md5 from "md5";
import { json } from "stream/consumers";

export default async function createdonation(
  formData: FormData
): Promise<string> {
  const { amount, name, message, crypto,email } = Object.fromEntries(formData);
  await mongoose.connect(process.env.MONGODB_URI as string);
  const donationdoc = await DonationModel.create({
    amount,
    name,
    message,
    crypto,
    email
  });
  const key=process.env.CRYPTOMUS_PAYMENT_API_key
  const endpoint = "https://api.cryptomus.com/v1/payment";
  const data={
    amount:parseInt(amount as string)*5,
    currency:'INR',
    order_id: donationdoc._id,
    to_currency: crypto,
    url_callback:'https://0b54-223-184-205-238.ngrok-free.app/callback?id='+donationdoc._id
  }
  const sign=md5(btoa(JSON.stringify(data)) + key )
  console.log(amount, name, message, crypto);
  return "";
}
