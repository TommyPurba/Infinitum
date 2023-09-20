"use client";

import Image from "next/image";
import eventPict from "../assets/event-pict.png";
import { Heart, Upload } from "lucide-react";

export const Card = () => {
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
            <Heart color="#475569" size={20} strokeWidth={3} />
          </div>
          <div className="iconAnimation">
            <Upload color="#475569" size={20} strokeWidth={3} />
          </div>
        </div>
      </div>

      <div className="p-4">
        <h1 className="eventTitle">Job Show | Careers & Job Fair</h1>
        <h1 className="locationTitle">Jakarta</h1>
        <p className="dateTitle">Fri, Sep 29 • 11:00 AM</p>
        <p className="buildingTitle py-2">AIA Central Jakarta</p>
        <p className="priceTitle">HTM : Free</p>
        <p className="companyTitle pt-2">JobXpert</p>
      </div>
    </div>
  );
};
