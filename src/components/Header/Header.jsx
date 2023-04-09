import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <div className="flex items-center justify-between px-4 py-4 relative">
        <div className="logo ">
          <p className="text-4xl font-bold">
            Edu<span className="text-fourth">care</span>
          </p>
        </div>
        <nav
          className={`flex flex-col md:flex-row gap-4 bg-white text-lg font-semibold absolute md:static w-full uppercase transition-all right-0 pl-7 pb-2 md:pl-0 md:pb-0 duration-300 ease-in-out md:w-auto ${
            open ? "top-16" : "-top-72"
          }`}
        >
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/blog">Blog</Link>
        </nav>
        <div onClick={() => setOpen(!open)} className="md:hidden">
          <span>
            {open ? (
              <XMarkIcon className="h-7 w-7" />
            ) : (
              <Bars3Icon className="h-7 w-7" />
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
