import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="w-full flex  py-12 justify-between item-center navbar" >
      <img src={logo} alt="Store Mgt Syt" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end item-center flex-1  ">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-proppin font-normal cursor-pointer  text-[13px]     max-w-xl rounded-md p-3  shadow-2xl space-y-6 hover:bg-sky-500
            ${index === navLinks.length - 1 ? "mr" : "mr-4"} text-white mr-0`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[20px] h-[20px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${toggle ? "flex" : "hidden"} p-4 bg-black-gradient 
          absolute top-20 right-0 mx-4 my-1 min-w-[80px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end item-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-proppin font-normal cursor-pointer  text-[10px]  max-w-xs rounded-md p-3  shadow-xl space-y-10 hover:bg-sky-500
            ${index === navLinks.length - 1 ? "mr-0" : "mb-1"} text-white mr-0`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
