import React from "react";
import { Facebook, Twitter, Linkedin, Youtube, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <div className=" flex justify-between items-center bg-button-main p-6">
      <div className=" text-md font-medium text-white">
        {" "}
        Copyright © 2023 • EventMaker
      </div>
      <div className=" text-xl font-medium text-white">
        Create with love 🫶🏻 by Infinitum team
      </div>

      <div className=" flex items-center justify-center gap-6">
        <div className="iconAnimation">
          <Facebook size={20} />
        </div>
        <div className="iconAnimation">
          <Twitter size={20} />
        </div>
        <div className="iconAnimation">
          <Linkedin size={20} />
        </div>
        <div className="iconAnimation">
          <Youtube size={20} />
        </div>
        <div className="iconAnimation">
          <Instagram size={20} />
        </div>
      </div>
    </div>
  );
};
