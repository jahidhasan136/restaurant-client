import { GiShoppingCart } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className="fixed z-10 text-white w-full bg-[#15151580] px-14">
      <div className="flex items-center justify-between">
        <h2 className="uppercase">
          <span className="font-black text-[32px]">Bistro Boss</span> <br />{" "}
          <span className="font-bold text-2xl">Restaurant</span>
        </h2>
        <div className="flex items-center gap-5 uppercase text-xl font-extrabold">
          <a
            href="#"
            className="transition-all duration-300 hover:text-[#EEFF25]"
          >
            Home
          </a>
          <a
            href="#"
            className="transition-all duration-300 hover:text-[#EEFF25]"
          >
            Contact us
          </a>
          <a
            href="#"
            className="transition-all duration-300 hover:text-[#EEFF25]"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="transition-all duration-300 hover:text-[#EEFF25]"
          >
            Our Menu
          </a>
          <a href="#" className="flex items-center">
            <span className="transition-all duration-300 hover:text-[#EEFF25]">
              Our Shop
            </span>
            <GiShoppingCart className="text-[43px]" />
          </a>
          <p className="flex items-center gap-2 cursor-pointer">
            <span className="transition-all duration-300 hover:text-[#EEFF25]">
              Sign out
            </span>
            <CgProfile className="text-[43px]" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
