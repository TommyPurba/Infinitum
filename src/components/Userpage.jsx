"use client"

import Image from "next/image";
import uiFaces from "../assets/uifaces.jpg";
import { Phone, Mail, Home } from "lucide-react";

export const Userpage = () => {
    return (
        <div>
            <div className="p-10 text-center justify-center">
                <Image
                className="rounded-full m-auto"
                src={uiFaces}
                alt="User Face"
                width={150}
                height={10}
                />
                <div className="p-10">
                    <h1 className="nameTitle">Project Infinitum</h1>
                    <h1 className="nameLocation">Sabang Sampai Merauke</h1>
                </div>
            </div>
            <div className="userpageContainer max-w-lg m-auto ">
                <div className="flex p-6 gap-x-10">
                    <div>
                        <div className="iconPhone"></div>
                        <Phone size={25} />
                    </div>
                    <div className="userpageCard">
                        <h2>MOBILE</h2>
                        <h2>+62 1234567890</h2>
                    </div>
                </div>
                <div className="flex p-8 gap-x-10">
                    <div>
                        <div className="iconMail"></div>
                        <Mail size={25} />
                    </div>
                    <div className="userpageCard">
                        <h2>EMAIL</h2>
                        <h2>me@something.com</h2>
                    </div>
                </div>
                <div className="flex p-8 gap-x-10">
                    <div>
                        <div className="iconHome"></div>
                        <Home size={25} />
                    </div>
                    <div className="userpageCard">
                        <h2>ADDRESS</h2>
                        <h2>Jl. Jenderal Sudirman No.21 Jakarta Selatan</h2>
                    </div>
                </div>
            </div>
            
        </div>
    );
};
