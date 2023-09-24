"use client";

import { useRouter } from "next/navigation";
import { useJoin } from "./hooks/userJoin";


export const Join = () => {
  const router = useRouter();
  const { joinData, handleJoinEventChange, joinUser, resetJoinData } =
    useJoin();

  const handleJoin = async () => {
    const data = await joinUser();
    if (data) {
      console.log(data);
      resetJoinData();
    }
  };

  const handleClick = () => {
    router.push("../../homepage");
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[340px] space-y-2">
        <div className="pb-10 space-y-2">
          <h1 className="text-2xl font-bold text-center">Join Event</h1>
          <input
            value={joinData.name}
            className="registerInput"
            name="name"
            placeholder="Name"
            onChange={handleJoinEventChange}
          />
          <input
            value={joinData.email}
            className="registerInput"
            name="email"
            placeholder="Email"
            onChange={handleJoinEventChange}
          />
          <input
            value={joinData.password}
            className="registerInput"
            name="phone"
            placeholder="phone"
            onChange={handleJoinEventChange}
          />
          <button
            className="registerButton hover:scale-105"
            onClick={handleJoin}
          >
            join
          </button>
          <div className="flex justify-center">
            <p>back to  </p>
            <button
              className="underline underline-offset-8 hover:text-sky-500"
              onClick={handleClick}
            >
              Home Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
