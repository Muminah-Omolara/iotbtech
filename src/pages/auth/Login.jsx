import login from "../../assets/login.png";
import CustomInput from "../../components/CustomInput";

function Login() {
  return (
    <div className="mx-auto w-auto max-w-5xl px-4 py-4 lg:px-0 lg:py-0 sm:px-4 gap-9 flex flex-col md:flex-row justify-center items-center min-h-screen">
      <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <img
          src={login}
          alt="Login illustration"
          className=" h-auto object-cover rounded-md"
        />
      </div>
      <div className="w-full md:w-1/2 bg-white rounded-lg flex flex-col items-center md:items-start">
        <p className="text-2xl font-bold mb-4 text-tt-primary">Login</p>
        <h2 className="text-3xl font-bold leading-snug text-left pb-6">
          Login to Tektariq
        </h2>

        <form action="">
          <CustomInput
            type="text"
            placeholder="youremail@gmail.com"
            label="Enter Your Email"
            name="email"
          />

          <CustomInput
            type="password"
            placeholder="Password"
            label="Enter Your Password"
            name="password"
          />

          <button className="w-full p-3 bg-tt-primary text-white rounded-md hover:bg-tt-primary transition duration-300">
            Login
          </button>

          <p className="mt-4 text-gray-700">
            Don&apos;t have an account?{" "}
            <a href="register" className="text-tt-primary hover:underline">
              Sign Up
            </a>
          </p>
          <p className="mt-4 text-gray-700">
            Forgot Password?{" "}
            <a
              href="forget-password"
              className="text-tt-primary hover:underline"
            >
              Reset here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
