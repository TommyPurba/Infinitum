"use client";

import { useState } from "react";
import Cookies from "js-cookie";

export const useLogin = () => {
  const [isLoading, setLoading] = useState(false);
  const initialLoginData = {
    email: "",
    password: "",
  };

  const [loginData, setLoginData] = useState(initialLoginData);

  const handleEventChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = async () => {
    setLoading(true);
    const { email, password } = loginData;
    const res = await fetch(
      "https://eventmakers-api.vercel.app/api/auth/login",
      {
        method: "POST",
        body: JSON.stringify({ email, password }),
      }
    );
    const data = await res.json();
    Cookies.set("token", data.token);
    alert("pasword anda benar bro...");
    console.log(data);
    setLoading(false);
  };

  return { isLoading, loginData, handleEventChange, handleLogin };
};
