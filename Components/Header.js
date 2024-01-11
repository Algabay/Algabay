"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase/FirebaseConfig";

const Header = () => {
  const [user, setUser] = useState(null);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Do you want to Logout ?");
    } catch (error) {
      console.error("Logout Error:", error.message);
    }
  };
  const headerClasses = `flex h-18 px-6 items-center justify-between fixed w-full z-10 top-0 ${
    scrolling ? "shadow-md" : ""
  } bg-gradient-to-r from-pink-100 to-indigo-200`;

  return (
    <div className={headerClasses}>
      <Link href="/">
        <img
          src="/logo.png"
          className="h-10 mx-6 mt-2 mb-2 max-sm:h-8 max-sm:-mx-2"
        />
      </Link>

      <input
        type="text"
        placeholder="Explore Stocks"
        className="w-[40%]  font-sans h-9 px-5 rounded-full bg-white"
      />

      <div className="flex gap-8 mr-8 items-center">
        <div className="flex justify-between gap-10 text-md">
          <Link href="/About" className="text-md max-sm:hidden">
            AI Chat
          </Link>
          <Link href="/About" className="text-md max-sm:hidden">
            Portfolios
          </Link>

          <Link href="/FinanceTools" className="text-md max-sm:hidden">
            Financial tools
          </Link>
          <Link href="/About" className="text-md max-sm:hidden">
            News
          </Link>
        </div>

        {user ? (
          <>
            <button onClick={handleLogout}>
              <img src="/logout-img.png" className="h-7" />
            </button>
            <div className="rounded-full text-white h-9 w-9 flex justify-center items-center border border-white text-md max-sm:text-sm max-sm:h-7 max-sm:w-7 max-sm:px-2 max-sm:py-1 max-sm:mt-1 max-sm:-mr-4">
              {user.displayName &&
                user.displayName.length > 0 &&
                user.displayName[0]}
            </div>
          </>
        ) : (
          <button
            onClick={handleGoogle}
            className="text-black border border-gray-300 px-2 mt-2 rounded-md text-md hover:bg-blue-50 mb-2"
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
