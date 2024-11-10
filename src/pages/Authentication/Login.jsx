import React from 'react';
import login from '../../assets/login.png';

function Login() {
  return (
    <div className="custom-container sm:px-4 lg:px-[163px] px-[1rem] gap-9 flex flex-col md:flex-row justify-center items-center min-h-screen bg-white">
      <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <img src={login} alt="Login illustration" className="w-full h-auto object-cover rounded-md" />
      </div>
      <div className="w-full md:w-1/2 bg-white rounded-lg flex flex-col items-center md:items-start">
        <p className="text-2xl font-bold mb-4 text-[#3B71FE]">Login</p>
        <h2 className="text-3xl font-bold leading-snug text-left pb-6">Login to Tektariq</h2>
        <form action="">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3B71FE] focus:border-[#3B71FE]"
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3B71FE] focus:border-[#3B71FE]"
          />
          <button className="w-full p-3 bg-[#3B71FE] text-white rounded-md hover:bg-[#1F56D0] transition duration-300">
            Login
          </button>

          <p className="mt-4 text-gray-700">
            Don't have an account?{' '}
            <a href="SignUp" className="text-[#3B71FE] hover:underline">
              Sign Up
            </a>
          </p>
          <p className="mt-4 text-gray-700">
            Forgot Password?{' '}
            <a href="SignUp" className="text-[#3B71FE] hover:underline">
              Reset here
            </a>
          </p>
        </form>
      </div>

      
    </div>
  );
}

export default Login;
