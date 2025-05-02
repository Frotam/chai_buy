import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import client from "@/app/lib/db";
import { authOptions } from "@/app/lib/authoptions";

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }