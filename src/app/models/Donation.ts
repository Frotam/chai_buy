import { models, Schema,model } from "mongoose";
type Donation={
    amount:Number;
name:String;
message?:String;
crypto:'btc'|'eth'|'ltc';
paid:Boolean;
}
const Donationschema=new Schema({
    amount:{type:Number,required:true},
    name:{type:String,required:true},
    message:{type:String,required:false},
 crypto: {
  type: String,
  required: true,
  validate: {
    validator: function (v:string
    ) {
      return ['btc','eth','ltc'].includes(v)
    },
   
  }
},
paid:{type:Boolean ,default:false}

})


export const DonationModel=models?.Donation|| model('Donation',Donationschema)