import React from 'react';
import register from '../../assets/Register.png';

function Register() {
  return (
    <div className="custom-container sm:px-4 lg:px-[163px] px-[1rem] gap-9 flex flex-col md:flex-row justify-center items-center min-h-screen bg-white">
      <div className="w-full md:w-1/2 order-1 md:order-1">
        <img src={register} alt="Register illustration" className="w-full h-auto object-cover rounded-md" />
      </div>

      <div className="w-full md:w-1/2 bg-white rounded-lg flex flex-col items-center md:items-start order-2 md:order-2">
        <p className="text-2xl font-bold mb-4 text-[#3B71FE]">Sign Up</p>
        <h2 className="text-3xl font-bold leading-snug text-left pb-6">Register with Tektariq</h2>
        <form action="">
          <input
            type="text"
            required
            placeholder="Enter Your Surname"
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3B71FE] focus:border-[#3B71FE]"
          />
          <input
            type="text"
            required
            placeholder="Enter Your Firstname"
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3B71FE] focus:border-[#3B71FE]"
          />
          <input
            type="email"
            required
            placeholder="Enter Your Email"
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3B71FE] focus:border-[#3B71FE]"
          />
          <input
            type="number"
            placeholder="Enter Your Mobile Number"
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3B71FE] focus:border-[#3B71FE]"
          />
          <input
            type="password"
            required
            placeholder="Enter Your Password"
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3B71FE] focus:border-[#3B71FE]"
          />
          <input
            type="password"
            required
            placeholder="Confirm Your Password"
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3B71FE] focus:border-[#3B71FE]"
          />
          <button className="w-full p-3 bg-[#3B71FE] text-white rounded-md hover:bg-[#1F56D0] transition duration-300">
            Register
          </button>
        </form>

        <p className="mt-4 text-gray-700">
          Already have an account?{' '}
          <a href="SignUp" className="text-[#3B71FE] hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
}

export default Register;
