import mongoose from "mongoose";
import { DonationModel } from "../models/Donation";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI as string);

    const { amount, name, message, order_id, creator, payment_id } = req.body;

    const donation = await DonationModel.create({
      amount,
      name,
      message,
      order_id,
      payment_id,
      creator,
      createdAt: new Date(),
      paid: true,
    });

    return res.status(201).json({ success: true, donation });
  } catch (err) {
    console.error("Donation Save Error:", err);
    return res.status(500).json({ success: false, error: err.message });
  }
}
