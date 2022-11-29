import React, { useState } from 'react';
import { close, logo, menu } from '../assets/index';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="logo" className="w-[124px] h-[64px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-normal cursor-pointer text-[16px] text-[#000] hover:text-[#3cd0dd] duration-150 tracking-wider ${
              index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } p-6 bg-black-gradient absolute top-20 right-10 mx-4 my-2 min-w-[140px] rounded-xl z-10 sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-normal cursor-pointer text-[16px] text-[#ffffff] hover:text-[#0ae2ff] duration-150 ${
                  index === navLinks.length - 1 ? 'mb-0' : 'mb-4'
                }`}
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
