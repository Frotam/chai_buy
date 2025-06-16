import { NextRequest,NextResponse } from "next/server";
import Razorpay from "razorpay";
const razorpay=new Razorpay({
    key_id:process.env.RAZORPAY_KEY_ID!,
    key_secret:process.env.RAZORPAY_KEY_SECRET

})
export async function POST(request:NextResponse){
    try {
        const body = await request.json();
        const amount=body.amount
        const order=await razorpay.orders.create({
            amount:amount*100*10,
            currency:'INR',
            receipt:"recipt_"+Math.random().toString(36).substring(7),
        })
        return NextResponse.json({orderID:order.id},{status:200})
    } catch (error) {
        console.error("error creating order ",error)
        return NextResponse.json(
            {error:"Error creating order"},
            {status:500})
    }
}