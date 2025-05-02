import { model, models, Schema, Model } from "mongoose";

type Profileinfo = {
  username: string;
  displayName: string;
  bio: string;
  avatar: string;
  coverurl: string;
  email:string;
};

const ProfileinfoSchema = new Schema<Profileinfo>(
  {
    username: { type: String, unique: true },
    email:{type:String,required:true},
    displayName: { type: String },
    bio: { type: String },
    avatar: { type: String },
    coverurl: { type: String },
  },
  { timestamps: true }
);

// Correct model export
export const Profilemodel: Model<Profileinfo> =
  models.Profileinfo || model<Profileinfo>("Profileinfo", ProfileinfoSchema);
