"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";

const Header = () => {
  const [user, setUser] = useState(null);
  const [scrolling, setScrolling] = useState(false);
  const router = useRouter();
  const [dropClick, setdropClick] = useState(false);
  const dropdownRef = useRef(null);

  // toggles the shadow for header on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // toggles the drop box
  const handleToggle = () => {
    setdropClick(!dropClick);
  };

  // close the dropdown when clicking outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setdropClick(false);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      unsubscribe();
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // google sign in
  const handleGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push("/Home");
      console.log(user);
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
    }
  };

  // google logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (error) {
      console.error("Logout Error:", error.message);
    }
  };

  const headerClasses = `flex h-18 px-6 max-sm:px-4 items-center justify-between fixed w-full z-10 top-0 ${
    scrolling ? "shadow-md" : ""
  } bg-gradient-to-r from-white to-white`;

  return (
    <>
      <div className={headerClasses}>
        <Link href="/Home">
          <img src="/logo.png" className="h-10 my-2 mx-6 max-sm:mx-2" />
        </Link>

        <div className="flex gap-8 mr-8 items-center">
          <Link
            href="/Portfolios"
            className="bg-lime-50 py-1 px-2 rounded-md text-gray-600"
          >
            PORTFOLIOS
          </Link>
          {user ? (
            <>
              <button onClick={handleToggle}>
                <img
                  src={user.photoURL || "/def.png"}
                  className="rounded-full h-9 w-9 "
                />
              </button>
            </>
          ) : (
            <button
              className="font px-3 py-1 mt-2 rounded-md text-md text-white hover:bg-blue-500 mb-2 bg-blue-400"
              onClick={handleGoogle}
            >
              Sign In
            </button>
          )}
        </div>
      </div>
      {dropClick && (
        <div
          ref={dropdownRef}
          className="h-auto w-auto right-0 fixed  p-5 z-40 "
        >
          {user ? (
            <>
              <div className="h-auto w-48 bg-white border rounded-2xl shadow-xl p-5">
                <div className="flex flex-col items-center my-4">
                  <img
                    src={user.photoURL || "/def.png"}
                    className="rounded-full h-9 w-9 mb-2"
                    alt="User Profile"
                  />
                  {user.displayName && user.displayName.length > 0 && (
                    <p className="text-gray-800 text-md font-semibold">
                      {user.displayName}
                    </p>
                  )}
                </div>

                <div className="flex justify-center py-3 my-4">
                  <button
                    onClick={handleLogout}
                    className="text-xl text-gray-700 flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 hover:bg-pink-200 focus:outline-none focus:ring focus:border-blue-300"
                  >
                    <img
                      src="/logout-img.png"
                      className="h-6 opacity-80"
                      alt="Logout"
                    />
                    Logout
                  </button>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      )}
    </>
  );
};

export default Header;
