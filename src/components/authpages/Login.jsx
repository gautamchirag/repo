// import React from 'react';
import { MdOutlineLockOpen } from 'react-icons/md';
function Login() {
  return (
    <div className="container mx-auto bg-white ">
      <div className="flex flex-col items-center justify-center gap-8 login-header py-[4rem] text-black">
        <form
          className="flex flex-col items-center gap-[2rem]   sam:w-[75%] md:w-[56%] lg:w-[40%] xl:w-[31%] "
          action=""
        >
          <div className="flex flex-col items-center gap-[6px] w-[100%]">
            <div className="bg-black rounded-full login-icon w-[2.8rem] h-[2.8rem] flex justify-center items-center">
              <MdOutlineLockOpen className="text-[1.7rem] text-white" />
            </div>

            <div className="text-[1.6rem] font-bold login-cont">
              Sign in to Your Account
            </div>
          </div>

          <div className="flex flex-col gap-8  inputContainer w-[100%] ">
            <input
              type="text"
              placeholder="Email"
              className="w-[100%] border border-black p-[0.6rem] pl-[1rem] hover:pal"
            />
            <input
              type="text"
              placeholder="Password"
              className="w-[100%] border p-[0.6rem] pl-[1rem] border-black"
            />
          </div>
          <div className="flex  w-[100%] justify-between">
            <div className="flex items-center justify-center gap-2 ">
              <span>
                <input type="checkbox" className="w-[15px] h-[15px]" />
              </span>
              <span className="text-[1.1rem]">Remember me</span>
            </div>
            <div className="text-[0.9rem] font-normal ">
              Forget your password?
            </div>
          </div>
          <div className="w-[100%] text-[0.8rem] font-normal">
            <p>
              I accept the Cricket Weapon Terms of Use and acknowledge Cricket
              Weapon will use my information in accordance with its.
              <span className="text-sm font-semibold text-center">
                {' '}
                Privacy Policy.
              </span>
            </p>
          </div>
          <button className="font-semibold text-white bg-black p-[13px] w-[100%] rounded">
            Sign in
          </button>
          <div className="flex items-center justify-center gap-[5px]">
            Don't have an account?
            <span className="text-lg font-semibold text-black hover:underline hover:text-red-500 hover:cursor-pointer">
              Create Account
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
