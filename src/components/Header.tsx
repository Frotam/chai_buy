'use client';
import Link from "next/link";
import { useState } from "react";
import { signIn, signOut } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMugHot } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { Session } from "next-auth";

export default function Header({ session }: { session: Session | null }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const email = session?.user?.email || "";
  const userName = session?.user?.name?.split(" ")[0] || "";

  return (
    <header className="mb-4 mt-4 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <FontAwesomeIcon icon={faMugHot} className="w-8 h-8 text-amber-700" />
          <span className="text-xl font-semibold whitespace-nowrap">Get me a Chai</span>
        </Link>

        {/* Right: Mobile Menu Icon & Profile */}
        <div className="flex items-center gap-4 sm:hidden">
          {session && (
            <Link href={'/profile'}>
            <Image
              src={session.user?.image || "/default-avatar.png"}
              alt="avatar"
              width={32}
              height={32}
              className="rounded-full"
            />
            </Link>
          )}
          <button
            className="text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>

        {/*desktop*/}
        <nav className="hidden sm:flex gap-6 items-center">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <Link href="/faq" className="hover:underline">FAQ</Link>

          {!session ? (
            <>
              <button onClick={() => signIn('google')} className="border px-4 py-1 rounded-full hover:bg-yellow-200">Login</button>
              <button onClick={() => signIn('google')} className="bg-amber-300 px-4 py-1 rounded-full font-bold hover:bg-yellow-200">Signup</button>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <Link href="/profile" className="flex items-center gap-2">
                <Image src={session.user?.image || "/default-avatar.png"} alt="avatar" width={30} height={30} className="rounded-full" />
                <span>Hello, {userName}</span>
              </Link>
              <button onClick={() => signOut()} className="bg-amber-500 px-4 py-1 rounded-full font-bold hover:bg-yellow-200">Logout</button>
            </div>
          )}
        </nav>
      </div>

      
      {menuOpen && (
        <div className="sm:hidden mt-2 bg-white border rounded-md shadow-lg p-4 text-center space-y-2">
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link><br />
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link><br />
          <Link href="/faq" onClick={() => setMenuOpen(false)}>FAQ</Link><br />

          {!session ? (
            <div className="space-y-2">
              <button onClick={() => signIn('google')} className="block w-full border rounded-full py-1 hover:bg-yellow-200">Login</button>
              <button onClick={() => signIn('google')} className="block w-full bg-amber-300 rounded-full py-1 font-bold hover:bg-yellow-200">Signup</button>
            </div>
          ) : (
            <button onClick={() => signOut()} className="w-full bg-amber-500 rounded-full py-1 font-bold hover:bg-yellow-200">Logout</button>
          )}
        </div>
      )}
    </header>
  );
}
