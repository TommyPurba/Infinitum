"use client";
import React from "react";
import Image from "next/image";
import { Sansita } from "next/font/google";

export const Headline = () => {
  return (
    <div className=" bg-highlight-color flex h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center justify-center">
          <h2 className=" text-4xl font-semibold">The people platform</h2>
          <h2 className=" text-6xl font-semibold">
            Where interests become friendships
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-center text-9xl">
            What’s happening at Eventmaker?
          </h1>
          <p className=" text-2xl">
            Check out our events schedule for the coming months.
          </p>
        </div>
        <button className="buttonAnimation buttonStyle">
          Find your next event
        </button>
      </div>
    </div>
  );
};
