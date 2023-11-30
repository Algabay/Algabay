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
    } catch (error) {
      console.error("Logout Error:", error.message);
    }
  };

  const headerClasses = `flex h-18 px-6 items-center justify-between fixed w-full bg-white z-10 ${
    scrolling ? "shadow-md" : ""
  }`;

  return (
    <div className={headerClasses}>
      <Link href="/">
        <img
          src="/logo.png"
          className="h-10 mx-6 mt-2 mb-2 max-sm:h-8 max-sm:-mx-2"
        />
      </Link>

      <div className="flex gap-8 mr-8 mt-2">
        {user ? (
          <>
            <p className=" pl-3 py-1  h-9 w-9 rounded-full border border-gray-300  text-md max-sm:text-sm max-sm:h-7 max-sm:w-7 max-sm:px-2 max-sm:py-1 max-sm:mt-1 max-sm:-mr-4">
              {user.displayName[0]}
            </p>

            <button
              onClick={handleLogout}
              className="text-black border border-gray-300 px-2 py-1 rounded-md text-md hover:bg-blue-50 mb-2 max-sm:text-sm max-sm:-mr-10 max-sm:mt-1"
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={handleGoogle}
            className="text-black border border-gray-300 px-2 py-1 rounded-md text-md hover:bg-blue-50 mb-2"
          >
            Sign In
          </button>
        )}

        <Link href="/About" className="mt-2 text-md max-sm:hidden">
          About Us
        </Link>
      </div>
    </div>
  );
};

export default Header;
