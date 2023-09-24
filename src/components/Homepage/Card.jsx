"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import eventPict from "@/assets/event-pict.png";
import { Heart, Upload } from "lucide-react";
import { stringify } from "postcss";

export const Card = ({ name, description, location, date }) => {
  const slicedYear = date.slice(0, 4);
  const slicedMonth = date.slice(8, 10);
  const slicedDay = date.slice(5, 7);

  const router = useRouter();

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

  const handleClickJoin = () => {
    router.push("../joinevent");
  };

  //   const [content, setContent] = useState("");
  //   const router = useRouter();

  //   const handleJointEvent = async () => {
  //     const res = await fetch(
  //       "https://eventmakers-api.vercel.app/api/join-event",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           name: name,
  //           content: content,
  //           user: "neuhendra@gmail.com",
  //         }),
  //       }
  //     );
  //     const data = await res.json();
  //     return data;
  //   };

  return (
    <div className="cardStyle relative">
      <div className=" relative">
        <Image
          className=" rounded-t-2xl"
          src={eventPict}
          width={342}
          height={120}
        />
        <div className="absolute -bottom-4 right-2 flex gap-x-3">
          <div className="iconAnimation">
            <Heart size={20} strokeWidth={3} />
          </div>
          <div className="iconAnimation">
            <Upload size={20} strokeWidth={3} />
          </div>
        </div>
      </div>

      <div className=" absolute -top-6 -right-6 flex flex-col items-center justify-center w-20 h-20 p-3 rounded-xl bg-highlight-color text-paraghraph-text ">
        <div className=" font-semibold">{getMonthName(slicedMonth)}</div>
        <div className=" font-bold text-4xl">{slicedDay}</div>
        {/* <div className=" text-xs font-light">{slicedYear}</div> */}
      </div>

      <div className="p-4">
        <div className="eventTitle">{name}</div>
        <div className="locationTitle">{location}</div>
        <div className="descriptionTitle">{description}</div>

        <div className=" flex justify-end">
          <button onClick={handleClickJoin} className="joinButton">Join Event</button>
        </div>
      </div>
    </div>
  );
};
