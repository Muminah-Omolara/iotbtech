import { RouterProvider } from "react-router-dom";
import router from "./routing/routes";
import TeamCard from "./components/TeamCard";
import TestimonialCard from "./components/TestimonialCard";
import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";
import ForgotPassword from "./pages/Authentication/ForgotPassword";
import SetPassword from "./pages/Authentication/SetPassword";

function App() {
  return <div className="font-sans">
    <RouterProvider router={router} />
   
    </div>;
}

export default App;
