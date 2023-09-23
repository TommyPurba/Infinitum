"use client";
import React from "react";
import { Find } from "./Find";
import { useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("../../login");
  };
  const handleClickSignup = () => {
    router.push("../../register");
  };

  return (
    <div className=" bg-secondary flex justify-between items-center px-6 py-4">
      <div className=" flex justify-center items-center gap-8">
        <div className=" logoText text-3xl font-bold bg-gradient-to-r from-red-500  to-amber-400 text-transparent bg-clip-text">
          EventMaker
        </div>
        <Find />
      </div>
      <div className=" flex justify-center items-center gap-2 font-medium">
        <button className="buttonAnimation">Find Event</button>
        <button className="buttonAnimation">Create Event</button>
        <button className="buttonAnimation" onClick={handleClick}>
          Log in
        </button>
        <button
          className="px-6 py-2 text-paraghraph-text font-semibold rounded-full bg-button-hover hover:opacity-75"
          onClick={handleClickSignup}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};
