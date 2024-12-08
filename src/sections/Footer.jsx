import { FaRegEnvelope } from "react-icons/fa";
import { FaInstagram, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { GrSend } from "react-icons/gr";
import { LuFacebook } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import Copyright from "../components/Copyright";
import TheLogo from "../components/Logo";

const Footer = () => {
  const footerNavs = [
    {
      label: "About",
      items: [
        {
          href: "javascript:void()",
          name: "About Us",
        },
        {
          href: "javascript:void()",
          name: "Blog",
        },
        {
          href: "javascript:void()",
          name: "Team",
        },
        {
          href: "javascript:void()",
          name: "Careers",
        },
      ],
    },

    {
      label: "Follow Us",
      items: [
        {
          href: "javascript:void()",
          name: "@TekTariq",
          icon: <LuFacebook />,
        },
        {
          href: "javascript:void()",
          name: "@TekTariq",
          icon: <FaInstagram />,
        },
        {
          href: "javascript:void()",
          name: "@TekTariq",
          icon: <FaXTwitter />,
        },
        {
          href: "javascript:void()",
          name: "09034425688, 07065829170",
          icon: <FaWhatsapp />,
        },
        {
          href: "javascript:void()",
          name: "iotbtechprenuer@gmail.com",
          icon: <FaRegEnvelope />,
        },
      ],
    },
  ];

  return (
    <div>
      <footer className=" bg-tt-grey bg-opacity-10 text-tt-black text-opacity-80 px-4 py-8 md:px-8">
        <div className="max-w-screen-xl mx-auto flex flex-col mt-10 space-y-6 justify-between items-start lg:flex-row md:space-y-0 md:mt-0">
          <div className="max-w-xs">
            <TheLogo />
            <p className="leading-relaxed mt-2 text-[15px]">
            We're IOTB Tech, a fast-rising tech academy, on a mission to liberate lives. 
            </p>
          </div>

          {footerNavs.map((item, idx) => (
            <ul className="space-y-4" key={idx}>
              <h4 className="text-tt-black font-medium">{item.label}</h4>
              {item.items.map((el, idx) => (
                <li key={el.name}>
                  <NavLink
                    href={el.href}
                    className="hover:underline hover:text-tt-primary"
                  >
                    {el.icon ? (
                      <span className="flex items-center gap-1">
                        <span className="text-tt-primary"> {el.icon}</span>
                        <span>{el.name}</span>
                      </span>
                    ) : (
                      <span>{el.name}</span>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          ))}

          <div>
            <h4 className="font-medium">Get in touch with US </h4>
            <form onSubmit={(e) => e.preventDefault()}>
              <label className="block pt-4 pb-2">Stay up to date</label>
              <div className="max-w-sm flex items-center border rounded-md p-1 bg-tt-white">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-2.5 outline-none"
                />
                <button className="p-2.5 rounded-md text-tt-primary hover:shadow-md sm:px-5">
                  <GrSend />
                </button>
              </div>
            </form>
          </div>
        </div>
      </footer>
      <Copyright />
    </div>
  );
};

export default Footer;
