"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/app/firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";

const Banner = () => {
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      router.push("/Home");
    }
  }, [user, router]);

  const handleGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push("/Home");
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row h-auto w-full justify-evenly">
        <div className="md:w-auto w-full p-8 md:p-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="font max-md:text-[2.2rem] md:text-[4rem] text-left max-md:text-center font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-indigo-400">
              Simplify Investments
              <br />
              with AI
            </h4>
          </motion.div>
          <h4 className="font text-gray-600 font-light text-lg md:text-xl mb-8 max-md:text-center">
            AI tools for instant market insights, FinGPT, and portfolio
            optimization.
          </h4>
          {user ? null : (
            <div className="max-md:flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 md:px-16 py-3 bg-blue-400 text-white rounded-lg shadow-md hover:bg-blue-500 focus:outline-none focus:ring focus:border-blue-300"
                onClick={handleGoogle}
              >
                Get Started
              </motion.button>
            </div>
          )}
        </div>
        <div className="md:w-auto w-full flex justify-center items-center p-8 md:p-14">
          <img
            src="/featuress.jpg"
            className="rounded-lg shadow-md max-w-full h-[400px]"
            alt="Features"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
