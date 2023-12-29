// react icons
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";

// images
import { Link } from "react-router-dom";
import authenticationImg from "../../assets/others/authentication2.png";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password, name);
    createUser(name, email, password).then((result) => {
      const user = result.user;
      console.log(user);
    });
  };
  return (
    <div className="bg_login grid items-center">
      <div className="container flex flex-row-reverse items-center justify-between gap-[196px] shadow-[#00000040] shadow-2xl py-[28px]">
        <img className="w-full" src={authenticationImg} alt="" />
        <form onSubmit={handleLogin} className="w-full">
          <h2 className="text-[40px] font-bold text-[#151515] text-center mb-5">
            Sign Up
          </h2>
          <div className="mb-6">
            <label className="text-xl font-semibold mb-4 block">Name</label>
            <input
              className="py-[27px] px-[29px] text-[#A1A1A1] rounded-lg w-full border border-[#D0D0D0]"
              type="text"
              name="name"
              placeholder="Type your name"
              required
            />
          </div>
          <div className="mb-6">
            <label className="text-xl font-semibold mb-4 block">Email</label>
            <input
              className="py-[27px] px-[29px] text-[#A1A1A1] rounded-lg w-full border border-[#D0D0D0]"
              type="email"
              name="email"
              placeholder="example@gmail.com"
              required
            />
          </div>
          <div className="mb-[31px]">
            <label className="text-xl font-semibold mb-4 block">Password</label>
            <input
              className="py-[27px] px-[29px] text-[#A1A1A1] rounded-lg w-full border border-[#D0D0D0]"
              type="password"
              name="password"
              placeholder="Type your password"
              required
            />
          </div>
          <button className="py-[27px] px-[29px] text-white text-xl font-bold rounded-lg w-full bg-[#d1a054b3] mb-[34px]">
            Sign Up
          </button>
          <h3 className="text-[#D1A054] text-xl font-medium text-center">
            Already Registered?{" "}
            <Link to="/login" className="font-bold">
              Go to Login
            </Link>
          </h3>
          <h4 className="mt-6 mb-[18px] text-xl font-medium text-[#444444] text-center">
            Or sign in with
          </h4>
          <div className="flex items-center justify-center gap-[56px]">
            <div className="border border-[#444444] p-[14px] rounded-full text-[#444444]">
              <FaFacebookF />
            </div>
            <div className="border border-[#444444] p-[14px] rounded-full text-[#444444]">
              <FaGoogle />
            </div>
            <div className="border border-[#444444] p-[14px] rounded-full text-[#444444]">
              <FaGithub />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
