import { RouterProvider } from "react-router-dom";
import router from "./routes/index.jsx";
import Dashboard from "./pages/Dashboard.jsx";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      
    </>
  );
}

export default App;
