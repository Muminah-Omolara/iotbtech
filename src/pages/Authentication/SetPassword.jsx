import React from 'react';
import setpassword from '../../assets/setpassword.jpg';

function SetPassword() {
  return (
    <div className="custom-container sm:px-4 lg:px-[163px] px-[1rem] gap-9 flex flex-col md:flex-row justify-center items-center min-h-screen bg-white">
   
      <div className="w-full md:w-1/2 order-1 md:order-1">
        <img
          src={setpassword}
          alt="SetPassword illustration"
          className="w-full h-auto object-cover rounded-md"
        />
      </div>

   
      <div className="w-full md:w-1/2 bg-white rounded-lg flex flex-col items-center md:items-start order-2 md:order-2">
        <p className="text-2xl font-bold mb-4 text-[#3B71FE]">Set Password</p>
        <h2 className="text-3xl font-bold leading-snug text-left pb-6">
          Set Password for your Tektariq Account
        </h2>
        <form action="">
          <input
            type="password"
            placeholder="Create a new password"
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3B71FE] focus:border-[#3B71FE]"
          />
          <input
            type="password"
            placeholder="Re-enter your password"
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3B71FE] focus:border-[#3B71FE]"
          />
          <button className="w-full p-3 bg-[#3B71FE] text-white rounded-md hover:bg-[#1F56D0] transition duration-300">
            Set Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default SetPassword;
