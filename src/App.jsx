import { RouterProvider } from "react-router-dom";
import router from "./routing/routes";


function App() {
  return <div className="font-sans">
    <RouterProvider router={router} />
    </div>;
}

export default App;
