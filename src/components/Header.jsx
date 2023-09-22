import React from "react";
import Image from "next/image";
import { Find } from "./Find";
import EventMaker from "../assets/eventmakers.png";

export const Header = () => {
  return (
    <div className=" bg-secondary flex justify-between items-center px-6 py-4">
      <div className=" flex justify-center items-center gap-8">
        {/* <Image src={EventMaker} width={200} height={30} /> */}
        <div className=" logoText text-3xl font-bold bg-gradient-to-r from-red-500  to-amber-400 text-transparent bg-clip-text">
          EventMaker
        </div>
        <Find />
      </div>
      <div className=" flex justify-center items-center gap-2 font-medium">
        <button className="buttonAnimation">Find Event</button>
        <button className="buttonAnimation">Create Event</button>
        <button className="buttonAnimation">Log in</button>
        <button className="px-6 py-2 text-paraghraph-text font-semibold rounded-full bg-button-hover hover:opacity-75">
          Sign Up
        </button>
      </div>
    </div>
  );
};
