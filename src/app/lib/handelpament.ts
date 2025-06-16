import mongoose, { Mongoose } from "mongoose";
import { DonationModel } from "../models/Donation";

declare global {
  interface Window {
    Razorpay: any;
  }
}
async function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}
export async function handleRazorpayPayment({amount,helper_name,creator,message=""}:{amount: number, helper_name: string,creator:string,message?:string}) {
   const isScriptLoaded = await loadRazorpayScript();
   
  if (!isScriptLoaded || typeof window.Razorpay === "undefined") {
    alert("Failed to load Razorpay SDK. Please try again later.");
    return;
  }
  try {
    const response = await fetch("/api/create-order", { method: "POST" });
    const data = await response.json();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: amount*100*10,
      currency: "INR",
      name: "BUY Chai My BOE",
      description: "Kharid Wa do",
      order_id: data.orderID,
      handler: function (response: any) {
        console.log("Payment Successful", response);
      },
      prefill: {
        name: helper_name,
      },
      theme: {
        color: "#3399ab",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
    console.log(data.onerror)
    await mongoose.connect(process.env.MONGODB_URI as string)

    const Prof=await  DonationModel.create({
      amount:amount,name:helper_name,message:message,order_id:data.orderID,creator:creator,createdAt:Date.now(),paid:true
    }) 
  } catch (error) {
    console.error("Payment error", error);
  }
}
