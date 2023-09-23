import Image from "next/image";
import loginImage from "/public/avatar.png";


export const Login = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex justify-center space-x-4">
        <div className="w-[500px] h-[500px] space-y-2">
          <div className="pb-10 space-y-2">
            <Image src={loginImage} width={500} height={500} />
          </div>
        </div>
        <div className="w-[380px] h-[500px] space-y-2">
          <div className="pb-10 space-y-2">
            <p>Welcome Back! </p>
            <h1 className="text-2xl font-bold">Login to your account</h1>
            <input
              type="email"
              placeholder="Email"
              className="form-input loginInput"
            />
            <input
              type="password"
              placeholder="Password"
              className="form-input loginInput"
            />
            <button className="loginButton px-4 py-3 rounded-md w-full bg-highlight-color font-semibold text-base">
              Login
            </button>
            <a href="http://" className="underline text-blue-400">
              Forgot Password
            </a>
            <div className="flex justify-between">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Google
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Microsoft
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Yahoo
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Apple
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
