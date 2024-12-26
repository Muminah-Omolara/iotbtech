import Button from "../components/Button";
import { MdOutlineNavigateNext } from "react-icons/md";
import { apiClient } from "../services/apiClient";

const ComponentTest = () => {
  const fellows = apiClient.get("https://tektariq-api.onrender.com/api/v1/fellows", {})
  console.log(fellows)
  return (
    <div>
      <h1>Test your components on this page</h1>
      <div>
        <h2>Buttons</h2>
        <div>
          <Button
            type="outline"
            text="Learn More"
            icon={<MdOutlineNavigateNext />}
          />
          <Button
            type="solid"
            text="Learn More"
            icon={<MdOutlineNavigateNext />}
          />
        </div>
      </div>
    </div>
  );
};

export default ComponentTest;
