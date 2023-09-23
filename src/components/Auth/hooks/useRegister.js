"use client";

import { useState } from "react";

export const useRegister = () => {
  const initialRegisterData = {
    name: "",
    email: "",
    password: "",
  };

  const [registerData, setRegisterData] = useState(initialRegisterData);

  const handleEventChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const registerUser = async () => {
    const { name, email, password } = registerData;
    try {
      const res = await fetch(
        "https://eventmakers-api.vercel.app/api/auth/register",
        {
          method: "POST",
          body: JSON.stringify({ name, email, password }),
        }
      );
      const data = await res.json();
      alert("register berhasil...");
      return data; // You might want to handle this data in your UI component.
    } catch (error) {
      alert("mohon bro diperhatikan untuk registernya...");
      console.error("Error registering user:", error);
      return null;
    }
  };

  const resetRegisterData = () => {
    setRegisterData(initialRegisterData);
  };

  return {
    registerData,
    handleEventChange,
    registerUser,
    resetRegisterData,
  };
};
