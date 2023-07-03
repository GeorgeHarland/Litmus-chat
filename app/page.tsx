"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Home = () => {
  const loggedIn = false;
  const router = useRouter();

  useEffect(() => {
    loggedIn && router.push("chatrooms");
  }, []);

  return <div className="flex md:text-gray-50">Landing Page</div>;
};

export default Home;
