"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";

const Header = () => {
  const [user, setUser] = useState(null);
  const [scrolling, setScrolling] = useState(false);
  const router = useRouter();

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
      router.push("/Home");
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
    }
  };

  const handleLogout = async () => {
    try {
      alert("Do you want to Logout ?");
      await signOut(auth);
      router.push("/");
    } catch (error) {
      console.error("Logout Error:", error.message);
    }
  };

  const headerClasses = `flex h-18 px-6 items-center justify-between fixed w-full z-10 top-0 ${
    scrolling ? "shadow-md" : ""
  } bg-gradient-to-r from-pink-100 to-indigo-200`;

  return (
    <div className={headerClasses}>
      <Link href="/Home">
        <img
          src="/logo.png"
          className="h-10 mx-6 mt-2 mb-2 max-sm:h-8 max-sm:-mx-2"
        />
      </Link>

      <div className="flex gap-8 mr-8 items-center">
        {user ? (
          <>
            <button onClick={handleLogout}>
              <img src="/logout-img.png" className="h-7 opacity-80" />
            </button>
            <img
              src={user.photoURL || "/def.png"}
              className="rounded-full h-9 w-9 max-sm:h-7 max-sm:w-7 max-sm:px-2 max-sm:py-1 max-sm:mt-1 max-sm:-mr-4"
              alt="User Profile"
            />
          </>
        ) : (
          <button
            className="text-gray-600  font px-3 py-1 mt-2 rounded-md text-md hover:bg-blue-500 hover:text-white mb-2 bg-white"
            onClick={handleGoogle}
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
