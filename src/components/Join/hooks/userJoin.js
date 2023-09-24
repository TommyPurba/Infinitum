"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useJoin = () => {
  const initialJoinData = {
    name: "",
    email: "",
    phone: "",
  };

  const router = useRouter();
  const [joinData, setJoinData] = useState(initialJoinData);

  const handleJoinEventChange = (e) => {
    const { name, value } = e.target;
    setJoinData({ ...joinData, [name]: value });
  };

  const joinUser = async () => {
    const { name, email, phone } = joinData;
    try {
      const res = await fetch(
        "https://eventmakers-api.vercel.app/api/join-event",
        {
          method: "POST",
          body: JSON.stringify({ name, email, phone }),
        }
      );
      const data = await res.json();
      alert("join berhasil...");
      return data; // You might want to handle this data in your UI component.
    } catch (error) {
      alert("mohon bro diperhatikan untuk joinnnya...");
      console.error("Error join user:", error);
      return null;
    }
  };

  const resetJoinData = () => {
    setJoinData(initialJoinData);
    router.push("../../homepage");
  };

  return {
    joinData,
    handleJoinEventChange,
    joinUser,
    resetJoinData,
  };
};
