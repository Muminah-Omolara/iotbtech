import Hamburger from "../assets/images/Vector.png"
const NavBar = () => {
  return <div>
    <nav class="mx-auto flex justify-between items-center w-auto max-w-5xl px-4 py-4 lg:px-0 lg:py-0 ">
      <div class=" " >LOGO</div>
      <div class="md:hidden"> <img src={Hamburger} alt="hamburger"/></div>
      <ul class="hidden md:flex md:items-center md:justify-between left-[241px] p-5 gap-[16px]">
        <li><a href="#" class="text-tt-black text-md font-[600] leading-6 border-b-2 border-tt-primary">Home</a></li>
        <li><a href="#" class="text-tt-grey text-md font-medium leading-6">Who we are ?</a></li>
        <li><a href="#" class="text-tt-grey text-md font-medium leading-6">Our services</a></li>
        <li><a href="#" class="text-tt-grey text-md font-medium leading-6">Our projects</a></li>
        <li><a href="#" class="text-tt-grey text-md font-medium leading-6">Contact us</a></li>
      </ul>
      <button class="hidden md:block bg-tt-primary w-[113px] h-[53px] rounded" > Button</button>

    </nav>
    

  </div>;
};

export default NavBar;
