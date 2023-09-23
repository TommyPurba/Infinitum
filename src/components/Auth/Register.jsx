"use client";

import { useRouter } from "next/navigation";
import { useRegister } from "./hooks/useRegister";

export const Register = () => {
  const router = useRouter();
  const { registerData, handleEventChange, registerUser, resetRegisterData } =
    useRegister();

  const handleRegister = async () => {
    const data = await registerUser();
    if (data) {
      console.log(data);
      resetRegisterData();
    }
  };

  const handleClick = () => {
    router.push("../../login");
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[340px] space-y-2">
        <div className="pb-10 space-y-2">
          <h1 className="text-2xl font-bold text-center">Register</h1>
          <input
            value={registerData.name}
            className="registerInput"
            name="name"
            placeholder="Name"
            onChange={handleEventChange}
          />
          <input
            value={registerData.email}
            className="registerInput"
            name="email"
            placeholder="Email"
            onChange={handleEventChange}
          />
          <input
            value={registerData.password}
            className="registerInput"
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleEventChange}
          />
          <button
            className="registerButton hover:scale-105"
            onClick={handleRegister}
          >
            Register
          </button>
          <div className="flex justify-center">
            <p>have accoutnt.. </p>
            <button
              className="underline underline-offset-8 hover:text-sky-500"
              onClick={handleClick}
            >
              login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
