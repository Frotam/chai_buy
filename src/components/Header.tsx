'use client'
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot, faUser } from "@fortawesome/free-solid-svg-icons";
import { signIn, signOut } from "next-auth/react";
import { Session } from "next-auth";
import Image from "next/image";

export default function Header({ session }: { session: Session | null }) {
    const email = session?.user?.email || "";
    const firstTwoParts = email.split(".").slice(0, 2).join(".");
    return (
    <header className="mb-10">
      <div className="flex justify-between max-w-4xl mx-auto px-8 mt-1 py-4 w-full">
        {/* Left side: "Get me a Chai" */}
        <Link href={"/"} className="inline-flex items-center gap-2 text-center">
          {/* Fixed icon size to prevent shrinking */}
          <FontAwesomeIcon
            icon={faMugHot}
            className="w-10 h-10 min-w-[40px] min-h-[40px] text-amber-700"
          />
          <span className="text-xl font-semibold mt-1 whitespace-nowrap">Get me a Chai</span>
        </Link>

        {/* Right side: Navigation and user auth */}
        <nav className="mt-2 flex items-center gap-6 ml-auto">
          <Link href="/about" className="text-wheat-800 font-medium hover:underline">
            About
          </Link>
          <Link href="/contact" className="text-text-wheat-800-800 font-medium hover:underline">
            Contact
          </Link>
          <Link href="/faq" className="text-text-wheat-800-800 font-medium hover:underline">
            FAQ
          </Link>

          <div className="flex items-center gap-4">
            {!session ? (
              <div className="flex gap-4">
                <button
                  onClick={() => signIn('google')}
                  className="bg--300 px-4 py-2 font-bold rounded-full ml-2 hover:bg-yellow-200 transition border">
                  Login
                </button>
                <button className="bg-amber-300 px-4 py-2 font-bold rounded-full hover:bg-yellow-200 transition">
                  Signup
                </button>
              </div>
            ) : (
              <>
                <Link href={`/profile`}className="flex items-center gap-2 min-w-[150px] flex-shrink-0">
                {/* <Link href={`/profile/${(email || "").split("@")[0]}`}className="flex items-center gap-2 min-w-[150px] flex-shrink-0"> */}
                  <Image src={session.user?.image || "/default-avatar.png"} alt="avatar" width='30' height="30" 
                  className=" rounded-full"></Image>
                  <span className="text-lg font-medium">{`Hello, ${session.user?.name}`}</span>
                </Link>
                <button
                  onClick={() => signOut()}
                  className="bg-amber-500 px-4 py-2 font-bold rounded-full hover:bg-yellow-200 transition">
                  Logout
                </button>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
