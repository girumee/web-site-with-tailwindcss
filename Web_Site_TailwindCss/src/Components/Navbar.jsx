import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="w-full flex  py-8 justify-between item-center navbar">
      <img src={logo} alt="Store Mgt Syt" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end item-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-proppin font-normal cursor-pointer  text-[12px] 
            ${index === navLinks.length - 1 ? "mr-0" : "mr-5"} text-white mr-5`}
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
                className={`font-proppin font-normal cursor-pointer  text-[12px] 
            ${index === navLinks.length - 1 ? "mr-0" : "mb-3"} text-white mr-5`}
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
