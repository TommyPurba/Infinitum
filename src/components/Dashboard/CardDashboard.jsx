"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import eventPict from "@/assets/event-pict.png";
import { Heart, Upload } from "lucide-react";
import { stringify } from "postcss";

export const CardDashboard = ({
  name,
  description,
  location,
  date,
  participants,
}) => {
  const slicedYear = date.slice(0, 4);
  const slicedMonth = date.slice(8, 10);
  const slicedDay = date.slice(5, 7);

  function checkDate(str) {
    return /^[A-Za-z0-9]*$/.test(str);
  }

  function getMonthName(monthNumber) {
    const date = new Date();
    const parsedMonthNumber = parseInt(monthNumber);
    date.setMonth(parsedMonthNumber - 1);

    return date.toLocaleString("en-US", {
      month: "short",
    });
  }

  return (
    <div className="cardStyle relative shadow-lg">
      <div className=" relative">
        <Image
          className=" rounded-t-2xl"
          src={eventPict}
          width={342}
          height={120}
        />
      </div>

      <div className=" absolute -top-6 -right-6 flex flex-col items-center justify-center w-20 h-20 p-3 rounded-xl bg-highlight-color text-paraghraph-text ">
        <div className=" font-semibold">{getMonthName(slicedMonth)}</div>
        <div className=" font-bold text-4xl">{slicedDay}</div>
      </div>

      <div className="p-4">
        <div className="eventTitle">{name}</div>
        <div className="locationTitle">{location}</div>
        <div className="descriptionTitle">{description}</div>
        <div className=" text-lg font-semibold text-red-500 pt-4">
          {participants} participants
        </div>
      </div>
    </div>
  );
};
