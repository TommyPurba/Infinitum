import React from "react";
import { Card } from "./Card";
import {
  Music4,
  VenetianMask,
  Plane,
  ActivitySquare,
  Gamepad2,
  CircleDollarSign,
  UtensilsCrossed,
  Bike,
} from "lucide-react";

export const CardDisplay = ({ eventsData }) => {
  return (
    <div className=" relative m-auto gap-8 bg-secondary py-20">
      <div>
        <div className="categoryAnimation floatingStyle -top-24 left-[105px]">
          <Music4 size={70} />
        </div>
        <div className="categoryAnimation floatingStyle -top-16 left-[262px]">
          <VenetianMask size={70} />
        </div>
        <div className="categoryAnimation floatingStyle -top-24 left-[419px]">
          <Plane size={70} />
        </div>
        <div className="categoryAnimation floatingStyle -top-16 left-[576px]">
          <ActivitySquare size={70} />
        </div>
        <div className="categoryAnimation floatingStyle -top-24 left-[733px]">
          <Gamepad2 size={70} />
        </div>
        <div className="categoryAnimation floatingStyle -top-16 left-[890px]">
          <CircleDollarSign size={70} />
        </div>
        <div className="categoryAnimation floatingStyle -top-24 left-[1047px]">
          <UtensilsCrossed size={70} />
        </div>
        <div className="categoryAnimation floatingStyle -top-16 left-[1204px]">
          <Bike size={70} />
        </div>
      </div>

      <div className=" flex justify-center items-center flex-col">
        <h2 className=" text-5xl font-bold mb-10 mt-16 pb-10">Explore Event</h2>
        <div className=" grid grid-cols-3 gap-16 pb-28">
          {eventsData.map(
            ({ name, description, location, date }) => {
              return (
                <Card
                  key={name}
                  name={name}
                  description={description}
                  location={location}
                  date={date}
                />
              );
            }
          )}
        </div>
      </div>
      <div className="flex justify-center border-t-2 pt-8 mx-8">
        <button className="buttonLoad">Show more</button>
      </div>
    </div>
  );
};
