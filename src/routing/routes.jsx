import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* implement the component for other routes */}
    </>,
  ),
);

export default router;
