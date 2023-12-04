import { GiShoppingCart } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <h2 className="uppercase">
        <span className="font-black text-[32px]">Bistro Boss</span> <br />{" "}
        <span className="font-bold text-2xl">Restaurant</span>
      </h2>
      <div className="flex items-center gap-5 uppercase text-xl font-extrabold">
        <a href="#">Home</a>
        <a href="#">Contact us</a>
        <a href="#">Dashboard</a>
        <a href="#">Our Menu</a>
        <a href="#" className="flex items-center">
          Our Shop
          <GiShoppingCart className="text-[43px]" />
        </a>
        <p className="flex items-center">
          Sign out
          <CgProfile className="text-[50px]" />
        </p>
      </div>
    </div>
  );
};

export default Navbar;
