import Input from '../../components/Input';
import register from '../../assets/register.png';

function Register() {
  return (
    <div className="mx-auto w-auto max-w-5xl px-4 py-4 lg:px-0 lg:py-2 sm:px-4 gap-9 flex flex-col md:flex-row justify-center items-center min-h-screen">
      <div className="w-full md:w-1/2 order-1 md:order-1">
        <img src={register} alt="Register illustration" className="w-full h-auto object-cover rounded-md" />
      </div>

      <div className="w-full md:w-1/2 bg-white rounded-lg flex flex-col items-center md:items-start order-2 md:order-2">
        <p className="text-2xl font-bold mb-4 text-tt-primary">Sign Up</p>
        <h2 className="text-3xl font-bold leading-snug text-left pb-6">Register with Tektariq</h2>
        <form action="">
          <Input type="text"  placeholder="Enter Your Surname" />
          <Input type="text" placeholder="Enter your Firstname" />
          <Input type="number" placeholder="Enter Your Email" />
          <Input type="number" placeholder="Enter Your Mobile Number" />
          <Input type="password" placeholder="Enter Your Password" />
          <Input type="password" placeholder="Confirm Your Password" />
          
          <button className="w-full p-3 bg-tt-primary text-white rounded-md hover:bg-tt-primary transition duration-300">
            Register
          </button>
        </form>

        <p className="mt-4 text-gray-700">
          Already have an account?{' '}
          <a href="Login" className="text-tt-primary hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
}

export default Register;
