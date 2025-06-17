import { models, Schema,model, Types } from "mongoose";

type Donation = {
  amount: number;
  name: string;
  message?: string;
  paid: boolean;
  payment_id?: string;
  order_id?: string;
  createdAt?: Date;
  creator:Types.ObjectId
};

const DonationSchema = new Schema<Donation>({
  amount: { type: Number, required: true },
  name: { type: String, required: true },
  message: { type: String, required: false },
  paid: { type: Boolean, default: false },
  payment_id: { type: String },
  order_id: { type: String },
  createdAt: { type: Date, default: Date.now },
  creator:{
    type:Schema.Types.ObjectId,
    ref:"Profileinfo",
    required:true
  }
});


export const DonationModel=models?.Donation|| model('Donation',DonationSchema)