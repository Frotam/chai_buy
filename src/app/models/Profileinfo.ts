import { model, models, Schema, Model, Types } from "mongoose";

export type Profileinfo = {
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
    avatar: { type: String ,default:"" },
    coverurl: { type: String,default:`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1746175525/OIP_mm4lto.jpg` },
  },
  { timestamps: true }
);

// Correct model export
export const Profilemodel: Model<Profileinfo> =
  models.Profileinfo || model<Profileinfo>("Profileinfo", ProfileinfoSchema);
