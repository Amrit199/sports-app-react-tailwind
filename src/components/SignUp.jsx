import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const SignUp = ({ open, close }) => {
  if (!open) return null;
  return (
    <div className="fixed top-0 left-0 bg-black/60 w-full h-full">
      <div className="flex items-center w-[60%] h-[100%] mx-auto lg:my-10">
        {/* left section */}
        <div className="hidden lg:block w-full h-full text-xl bg-black text-white p-4">
          <h3 className="text-3xl font-bold my-8">
            Become a member and get an exclusive offers
          </h3>
          <div className="flex flex-col gap-4">
            <p>- More great offers</p>
            <p>- 60 day 100% satisfaction gurantee</p>
            <p>- Free, annual bike service for bikes bought from XXL</p>
            <p>- Always electronic receipt</p>
          </div>
        </div>
        {/* right form section */}
        <div className="w-full h-full bg-white p-2 lg:p-4 relative">
          <form>
            <AiOutlineClose
              size={35}
              className="absolute right-3 top-4 hover:text-red-400 cursor-pointer"
              onClick={close}
            />
            <h3 className="mt-2 lg:mt-8 font-bold text-xl lg:text-3xl">
              Complete the form
            </h3>
            <div className="p-2 lg:p-4 flex flex-col gap-1 lg:gap-3">
              <div>
                <label>First name*</label>
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full border border-black p-2 mt-2"
                />
              </div>
              <div>
                <label>Surname*</label>
                <input
                  type="text"
                  placeholder="Surname"
                  className="w-full border border-black p-2 mt-2"
                />
              </div>
              <div>
                <label>Mobile*</label>
                <input
                  type="text"
                  placeholder="Mobile number"
                  className="w-full border border-black p-2 mt-2"
                />
              </div>
              <div>
                <label>E-mail address*</label>
                <input
                  type="text"
                  placeholder="xyz@gmail.com"
                  className="w-full border border-black p-2 mt-2"
                />
              </div>
              <div>
                <label>Password*</label>
                <input
                  type="text"
                  placeholder="******"
                  className="w-full border border-black p-2 mt-2"
                />
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="w-4 h-4 mr-2" />
                <label>
                  {" "}
                  I accept the
                  <a href="#" className="underline ml-2">
                    terms of use
                  </a>
                </label>
              </div>
              <button className="bg-black/60 text-white py-3">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
