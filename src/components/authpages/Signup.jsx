// import React from 'react';
import { MdOutlineLockOpen } from 'react-icons/md';
function Login() {
  return (
    <div className="container mx-auto bg-white">
      <div className="flex flex-col items-center justify-center gap-8 login-header py-[4rem]  text-black">
        <form
          className="flex flex-col items-center gap-[2rem]   -pink-500 -2   md:w-[56%] lg:w-[40%] xl:w-[31%]"
          action=""
        >
          <div className="flex flex-col items-center gap-[6px]">
            <div className="bg-black rounded-full login-icon w-[2.8rem] h-[2.8rem]  flex justify-center items-center">
              <MdOutlineLockOpen className="text-[1.7rem]  text-white" />
            </div>

            <div className="md:text-[1.6rem] font-bold login-cont text-[1.2rem] ">
              Sign up to Your Account
            </div>
          </div>

          <div className="flex flex-col gap-8  inputContainer  w-[100%] -red-500 ">
            <input
              type="text"
              placeholder="Name"
              className="w-[100%]  border-gray-400 border p-[0.6rem] pl-[1rem] focus:border-black focus:border-2 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-[100%]    border-gray-400 border p-[0.6rem] pl-[1rem] focus:border-black focus:border-2 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-[100%]   border-gray-400 border p-[0.6rem] pl-[1rem] focus:border-black focus:border-2 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-[100%]   border-gray-400 border p-[0.6rem] pl-[1rem] focus:border-black focus:border-2 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-4 w-[100%]   -green-400">
            <div className="flex items-center gap-4">
              <span>
                <input type="checkbox" className="w-[20px] h-[20px]" />
              </span>
              <p className="text-[0.9rem]  font-semibold">
                I Accept The Cricket Weapon Terms Of Use
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span>
                <input type="checkbox" className="w-[20px]  h-[20px]" />
              </span>
              <p className="text-[0.9rem]  font-semibold">
                I Accept The Cricket Weapon Terms & Conditions
              </p>
            </div>
          </div>
          <div className="w-[100%]  text-[0.8rem] font-normal ">
            <p className="text-center ">
              I acknowledge Cricket Weapon will use my information in
            </p>
            <div className="text-center">
              accordance with its .
              <span className="font-semibold text-[15px] underline">
                Privacy Policy
              </span>
            </div>
          </div>
          <button className="font-semibold text-white bg-black p-[13px] w-[100%] rounded">
            Sign in
          </button>
          <div className="flex items-center justify-center gap-[5px]">
            Already have an account?
            <span className="text-lg font-semibold text-black hover:underline hover:text-red-500 hover:cursor-pointer">
              Login
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
