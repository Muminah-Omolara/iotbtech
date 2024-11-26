import React from "react";
import ForgotPassword from "../../assets/forgotpassword.jpg";
import Input from "../../components/CustomInput";

function Forgot_Password() {
  return (
    <div className="mx-auto w-auto max-w-5xl px-4 py-4 lg:px-0 lg:py-2 sm:px-4 gap-9 flex flex-col md:flex-row justify-center items-center min-h-screen">
      <div className="w-full md:w-1/2 order-1 md:order-1">
        <img
          src={ForgotPassword}
          alt="ForgotPassword illustration"
          className="w-full h-auto object-cover rounded-md"
        />
      </div>

      <div className="w-full md:w-1/2 bg-white rounded-lg flex flex-col items-center md:items-start order-2 md:order-2">
        <p className="text-2xl font-bold mb-4 text-tt-primary">
          Reset Password
        </p>
        <h2 className="text-3xl font-bold leading-snug text-left pb-6">
          Forget your Password?
        </h2>
        <p>
          Don’t worry, happens to all of us. Enter your email below to recover
          your password
        </p>
        <form action="">
        <CustomInput
              type="email"
              placeholder="your-email@gmail.com"
              label="Email"
              name="email"
            />

          <button className="w-full p-3 bg-tt-primary text-white rounded-md hover:bg-tt-primary transition duration-300">
            Submit
          </button>

          <p className="mt-4 text-gray-700">
            Remembered your password?{" "}
            <a href="Login" className="text-tt-primary hover:underline">
              Go Back to Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Forgot_Password;
