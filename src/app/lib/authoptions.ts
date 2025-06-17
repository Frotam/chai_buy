import  { AuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import client from "@/app/lib/db";

export const authOptions: AuthOptions = {
    adapter: MongoDBAdapter(client),
providers:[

    GoogleProvider({
        clientId:process.env.GOOGLE_CLIENT_ID as string,
        clientSecret:process.env.GOOGLE_CLIENT_SECRET as string

    }),
]
}