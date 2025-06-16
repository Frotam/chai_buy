'use client';
import { useState } from 'react';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signIn } from 'next-auth/react';

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {/* Main Hero Section */}
      <section className="h-[calc(100vh-64px)] flex items-center justify-center px-4">
        <div className="text-center max-w-lg w-full">
          <h1 className="text-5xl sm:text-6xl font-bold text-black leading-tight">
            Fund your<br />
            creative work
          </h1>

          <h2 className="mt-6 mb-10 text-lg sm:text-2xl text-gray-700">
            Accept support for your work.<br />
            It's easier than you think.
          </h2>

          <button
            className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 font-bold rounded-full transition"
            onClick={() => setShowPopup(true)
              // onClick={() => signIn('google')
            }
          >
            Start my page
          </button>
        </div>
      </section>

      {/* Login / Signup Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-80 text-center shadow-lg">
            <h2 className="text-xl font-bold mb-4">Welcome!</h2>
            <p className="mb-6 text-gray-700">Please sign in to start your page.</p>
            <button
              className="bg-amber-400 hover:bg-amber-300 w-full py-2 font-semibold rounded mb-2"
              onClick={() => signIn('google')}
            >
              Login
            </button>
            <button
              className="border w-full py-2 rounded font-semibold hover:bg-gray-100"
              onClick={() => setShowPopup(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}
