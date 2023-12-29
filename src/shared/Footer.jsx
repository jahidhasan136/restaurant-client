import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-white text-center w-full mt-[130px]">
      <div className="flex">
        <div className="bg-[#1F2937] w-full p-[90px] font-medium">
          <h3 className="text-[32px] mb-6">Contact Us</h3>
          <p className="text-xl">123 ABS Street, Uni 21, Bangladesh</p>
          <p className="text-xl">+88 123456789</p>
          <p className="text-xl">Mon-Fri: 08:00 - 22:00</p>
          <p className="text-xl">Sat-Sun: 10:00 - 23:00</p>
        </div>
        <div className="bg-[#111827] w-full p-[90px] h-auto">
          <h3 className="text-[32px] mb-6">Follow US</h3>
          <p className="text-xl">Join us on social media</p>
          <div className="flex justify-center items-center gap-8 mt-8">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>
      <p className="bg-[#151515] p-[17px]">
        Copyright&copy; CulinaryCloud. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
