import Copyright from "./Copyright";

const Footer = () => {
  return <div>
    <footer class="bg-tt-grey">
      <div class=" mx-auto flex justify-between text-tt-black pt-8 mb-8 w-auto max-w-6xl">
        <div class="lg:pl-16 pl-4">
          <img src="" alt="LOGO"  class="mb-4"/>
          <p class=' font-normal text-[16px] leading-[27.44px] w-[155px] lg:w-[255px] mb-2'>DigitUx is a Digital agencay that create User centred Product that help her client to evolve</p>
        </div>
        <ul class="flex-col hidden md:block">
          <li class="font-[600] text-[18px] mb-4 ">About</li>
          <li class='leading-[27.44px] mb-2'>About Us</li>
          <li class='leading-[27.44px] mb-2'>Study Case</li>
          <li class='leading-[27.44px] mb-2'>Blogs</li>
          <li class='leading-[27.44px] mb-2'>Portfolio</li>
          <li class='leading-[27.44px] mb-2'>careers</li>
        </ul>
        <div>
        <ul class="hidden md:block">
          <li class="font-[600] text-[18px] mb-4">Follow Us</li>
          <li class="flex leading-[27.44px] mb-2">
            <img src="" alt="F" />
            <p>facebook page</p>
          </li>
          <li class="flex leading-[27.44px] mb-2">
            <img src="" alt="I" />
            <p>instagram page</p>
          </li>
          <li class="flex leading-[27.44px] mb-2">
            <img src="" alt="T" />
            <p>twitter handle</p>
          </li>
          <li class="flex leading-[27.44px] mb-2">
            <img src="" alt="D" />
            <p>dribble</p>
          </li> 
        </ul>
        </div>
        <div className="lg:pr-16 pr-4">
          <ul>
            <li class="font-[600] text-[18px] mb-4">Get In touch with Us</li>
            <li class="leading-[27.44px] mb-2 w-[255px]">Need Answers? Need help ? Just email us </li>
            <li><input className="w-[184px]" type="email" placeholder="your email" /></li>
          </ul>
        </div>
      </div>
      <div><Copyright/></div>
    </footer>
  </div>;
};

export default Footer;
