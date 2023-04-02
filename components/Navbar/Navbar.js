import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "../../assets/icons/logo.png";
import usericon from "../../assets/icons/user.png";
const Navbar = ({ title }) => {
  return (
    <div className="w-full fixed z-[99] top-0 left-0 lg:pl-64" id="navbar">
      <nav
        className={`  w-full px-3 sm:px-8 py-4 sm:py-9 flex justify-between items-center`}
      >
        <h1 className="navbar_text text-2xl font-medium capitalize lg:block xl:block  md:hidden sm:hidden ">
          {title}
        </h1>
        <button className=" bg-[#f7f7f7] w-9 h-9 rounded-[50%] flex justify-between items-center ">
          <Image src={usericon} alt="user" className="h-auto  " />
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
