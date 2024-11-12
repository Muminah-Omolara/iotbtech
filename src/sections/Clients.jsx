import { google, microsoft, spotify, tesla, tiktok, yassir } from "../assets/images"
import ImagesComponent from "../components/ImagesComponent"

const Clients = () => {
  return (
    <div className="mx-auto max-w-5xl p-6 lg:p-0 mt-24">
        <h2 className="text-tt-black text-lg font-bold mb-8">
            Clients We helped
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3
            lg:grid-cols-6 gap-8 items-center justify-center">
                <ImagesComponent src={microsoft} alt="microsoft logo" />
                <ImagesComponent src={google} alt="google logo" />
                <ImagesComponent src={spotify} alt="spotify logo" />
                <ImagesComponent src={tesla} alt="tesla logo" />
                <ImagesComponent src={yassir} alt="yassir logo" />
                <ImagesComponent src={tiktok} alt="tiktok logo" />
        </div>
    </div>
  )
}

export default Clients
