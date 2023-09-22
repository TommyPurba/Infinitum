"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import eventPict from "../assets/event-pict.png";
import { Heart, Upload } from "lucide-react";
import { stringify } from "postcss";

export const Card = ({ name, description, location, date }) => {
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
    <div className="cardStyle">
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

      <div className="p-4">
        <div className="eventTitle">{name}</div>
        <div className="locationTitle">{location}</div>
        <div className="descriptionTitle">{description}</div>
        <div className="dateTitle pt-3">{date}</div>
        <div className=" flex justify-end">
          <button className="joinButton">Join Event</button>
        </div>
      </div>
    </div>
  );
};
