import Button from "../components/Button";
import { MdOutlineNavigateNext } from "react-icons/md";
import { apiClient } from "../services/apiClient";
import { useEffect } from "react";

const ComponentTest = () => {

  useEffect(() => {
    getFellow().then((res) => {
      console.log(res);
    })
  
  })

  const getFellow = async () => {
    const fellows = await apiClient.get("https://tektariq-api.onrender.com/api/v1/fellows", {});
    return fellows;
  }
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
