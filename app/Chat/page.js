"use client";
import React, { useEffect } from "react";
import Chat from "@/Components/Chat";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";

const page = () => {
  // const [user] = useAuthState(auth);
  // const router = useRouter();

  // useEffect(() => {
  //   const userSession = sessionStorage.getItem("user");
  //   if (!user && !userSession) {
  //     router.push("/");
  //   }
  // }, [user, router]);

  return (
    <div>
      <Chat />
    </div>
  );
};

export default page;
