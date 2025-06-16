'use client';

import {faCoffee} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useEffect, useState} from "react";
import createdonation from "./Donnationaction";
import  { handleRazorpayPayment } from "../lib/handelpament";
import Script from 'next/script';
<Script
  src="https://checkout.razorpay.com/v1/checkout.js"
  strategy="beforeInteractive"
/>
export default function DonationForm({email,_id}:{email:string ,_id:string}) {
  const [numberInValue, setNumberInValue] = useState('');
  const [crypto, setCrypto] = useState('btc');
  const [message, setMessage] = useState('Get some chai');
  const [amount, setAmount] = useState(1);
  const [name, setName] = useState('Anonymous');

  useEffect(() => {
    if (numberInValue) {
      const intValue = parseInt(numberInValue);
      if (intValue > 5 && intValue <= 1000) {
        setAmount(intValue);
      } else if (intValue === 1 || intValue === 3 || intValue === 5) {
        setAmount(intValue);
      } else {
        setAmount(1);
      }
    }
  }, [numberInValue]);
  async function handelsubmit(formdata:FormData){
    const amount=Number(formdata.get('amount'))

    const msg=message
    const helper_name=name
    const creator=_id
    if (!isNaN(amount) && name) {
      console.log(amount,helper_name)
    await handleRazorpayPayment({amount:amount, helper_name:helper_name,message:msg,creator:creator});
  } else {
    console.error(" Invalid amount or email");
  }
  }
  console.log(_id)
  

  return (
    <form action={handelsubmit} >
      <div className="border border-yellow-300  bg-yellow-300/10 rounded-xl p-4 flex gap-2 items-center">
        <FontAwesomeIcon icon={faCoffee} />
        <span>x</span>
        <button
          type="button"
          onClick={() => {setAmount(1); setNumberInValue('1');}}
           className={` ${"amount " + (amount === 1? 'active text-black ' : '')}`}>
          1
        </button>
        <button
          type="button"
          onClick={() => {setAmount(3); setNumberInValue('3');}}
          className={` ${"amount " + (amount === 3 ? 'active text-black' : '')}`}>
          3
        </button>
        <button
          type="button"
          onClick={() => {setAmount(5); setNumberInValue('5');}}
          className={"amount " + (amount === 5 ? 'active text-black' : '')}>
          5
        </button>
        <input type="hidden" name="amount" value={amount} />
<input type="hidden" name="email" value={email} />
        <input
          className="w-12 h-12 border text-white border-yellow-300 rounded-xl text-center"
          type="number"
          placeholder="10"
          onChange={ev => setNumberInValue(ev.target.value)}
          value={numberInValue} />
      </div>
      <div className="mt-2">
        <input name="name" type="text" placeholder="Your name" value={name} onChange={(e)=>setName(e.target.value)}/>
      </div>
      <div className="mt-2">
        <textarea name="message" id="" placeholder="Say something nice" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
      </div>
      <div className="mt-2">
        <h3 className="text-xs text-gray-500 mb-1">Pay with selected currency </h3>
        <div className="flex gap-1">
         <button
  type="button"
  onClick={() => setCrypto('btc')}
  className={`p-1 rounded-lg border text-center min-w-[80px] ${
    crypto === 'btc' ? 'bg-yellow-300 border-yellow-500 text-black font-semibold' : 'bg-white border-gray-300 text-gray-700'
  }`}
>
  <span>INR</span>
</button>
        </div>
      </div>
      <div className="mt-2">
        <button className="bg-yellow-300 w-full rounded-xl text-black  py-2 font-semibold">
          Support ₹ {amount * 10}
        </button>
      </div>
    </form>
  );
}