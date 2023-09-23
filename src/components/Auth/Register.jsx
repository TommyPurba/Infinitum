"use client";

import { useRouter } from "next/navigation";

export const Register = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("../../login");
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[340px] space-y-2">
        <div className="pb-10 space-y-2">
          <h1 className="text-2xl font-bold text-center">Register</h1>
          <input className="registerInput" name="name" placeholder="Name" />
          <input className="registerInput" name="email" placeholder="Email" />
          <input
            className="registerInput"
            name="password"
            type="password"
            placeholder="Password"
          />
          <button className="registerButton">Register</button>
          <div className="flex justify-center">
            <p>have accoutnt.. </p>
            <button className="underline underline-offset-8 hover:text-sky-500" onClick={handleClick}>login</button>
          </div>
        </div>
      </div>
    </div>
  );
};
