import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);
  return (
    <>
      <nav className="bg-transparent mx-auto">
        <div className="flex items-center font-medium justify-between">
          <div className="p-5 w-full flex justify-between items-center">
            <div className="font-bold text-5xl md:text-6xl cursor-pointer font-primary text-[var(--Very-darkblue)] ">
              W.
            </div>
            <div onClick={handleClick} className="md:hidden z-40">
              {open ? (
                <FaTimes size={30} className="text-black cursor-pointer" />
              ) : (
                <FaBars size={30} className="text-black cursor-pointer" />
              )}
            </div>
          </div>
          <ul className="md:flex hidden items-center gap-8 font-primary text-[var(--Dark-grayishblue)] md:pr-8 ">
            <li className="cursor-pointer hover:text-[var(--Soft-red)]">
              Home
            </li>
            <li className="cursor-pointer hover:text-[var(--Soft-red)]">New</li>
            <li className="cursor-pointer hover:text-[var(--Soft-red)]">
              Popular
            </li>
            <li className="cursor-pointer hover:text-[var(--Soft-red)]">
              Trending
            </li>
            <li className="cursor-pointer hover:text-[var(--Soft-red)]">
              Categories
            </li>
          </ul>

          {/* Overlay */}

          {open ? (
            <div className="bg-black/40 fixed w-full h-screen z-20 top-0 right-0 duration-700 ease-in"></div>
          ) : (
            ""
          )}

          {/* Mobile */}

          <ul
            className={`md:hidden bg-white absolute w-[60%] top-0 text-[var(--Very-darkblue)] text-3xl font-medium h-screen space-y-4 py-24 z-30 p-6 duration-500 ease-in ${
              open ? "right-0" : "left-[-100%]"
            }`}
          >
            <li className="cursor-pointer hover:text-[var(--Soft-red)]">
              Home
            </li>
            <li className="cursor-pointer hover:text-[var(--Soft-red)]">New</li>
            <li className="cursor-pointer hover:text-[var(--Soft-red)]">
              Popular
            </li>
            <li className="cursor-pointer hover:text-[var(--Soft-red)]">
              Trending
            </li>
            <li className="cursor-pointer hover:text-[var(--Soft-red)]">
              Categories
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
