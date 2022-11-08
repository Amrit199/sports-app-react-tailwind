import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import SignUp from "./SignUp";

const Login = ({ open, close }) => {
  const [openSignup, setOpenSignup] = useState(false);

  if (!open) return null;
  return (
    <div className="fixed top-0 left-0 bg-black/60 w-full h-full z-20">
      <div className="flex items-center w-[60%] h-[70%] mx-auto my-10">
        {/* left hero section */}
        <div className="hidden lg:block bg-black text-white p-6 w-full h-full">
          <h3 className="font-bold text-3xl mb-5">
            Log in and get access to exclusive offers as an XXL Reward member
          </h3>
          <div className="flex flex-col gap-5">
            <p>- More great offers</p>
            <p>- 60 day 100% satisfaction gurantee</p>
            <p>- Free, annual bike service for bikes bought from XXL</p>
            <p>- Always electronic receipt</p>
          </div>
        </div>
        {/* right form section */}
        <div className="p-6 relative w-full h-full bg-white">
          <form>
            <AiOutlineClose
              size={30}
              className="absolute right-3 cursor-pointer hover:text-red-700"
              onClick={close}
            />
            <h1 className="text-3xl font-bold">Sign in</h1>
            <h3 className="my-3">
              No profile?
              <button onClick={() => setOpenSignup(!openSignup)}>
                Create account
              </button>
            </h3>
            <div className="my-4">
              <label className="py-2">Email Address</label>
              <input
                type="email"
                className="border p-2 rounded-md border-black w-full"
                placeholder="xyz@gmail.com"
              />
            </div>
            <div className="my-4">
              <label className="py-2">Password</label>
              <input
                type="password"
                className="border p-2 rounded-md border-black w-full"
                placeholder="******"
              />
            </div>
            <button className="rounded-md w-full py-2 bg-blue-500 text-white mb-4 hover:bg-blue-800">
              Sign In
            </button>
          </form>
        </div>
      </div>
      <SignUp open={openSignup} close={() => setOpenSignup(false)} />
    </div>
  );
};

export default Login;
