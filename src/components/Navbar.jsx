import React, { useState } from "react";
import { VscCheck } from "react-icons/vsc";
import { FaRegUser, FaCartPlus } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { logo } from "../assets";
import Login from "./Login";
import Searchbar from "./Searchbar";
import Menubar from "./Menubar";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useRef } from "react";

const Navbar = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const menuRef = useRef()

  useEffect(() => {
    const closeDropdown = (e) => {
        if(e.path[0] !== menuRef.current) {
            setOpenMenu(false)
        }
    }
    document.addEventListener("click", closeDropdown)

    return (
        document.removeEventListener("click", closeDropdown)
    )
  })

  const handleClick = () => {
    setOpenMenu(false)
  }
  return (
    <div className="w-full bg-black h-[140px] md:h-[200px]">
      {/* small green background top header */}
      <div className="w-full bg-green-400 h-7 flex">
        <div className="w-[90%] mx-auto flex items-center justify-start">
          <div className="flex mr-7 items-center">
            <VscCheck className="w-3 mx-1" />
            <p className="text-sm">30 Day's return promise</p>
          </div>
          <div className="hidden sm:flex mr-7 items-center">
            <VscCheck className="w-3 mx-1" />
            <p className="text-base">100% Satisfaction</p>
          </div>
          <div className="hidden md:flex mr-7 items-center">
            <VscCheck className="w-3 mx-1" />
            <p className="text-base">Free return and exchange</p>
          </div>
        </div>
      </div>
      {/* Logo and login menu */}
      <div className="w-[90%] mx-auto my-4 text-white relative">
        {/* xxl logo header */}
        <div className="flex justify-between">
          <div className="flex items-center gap-8 md:gap-4">
            {!openMenu ? (
              <AiOutlineMenu
                size={30}
                className="hover:text-green-400 md:hidden cursor-pointer"
                onClick={() => setOpenMenu(!openMenu)}
              />
            ) : (
              <AiOutlineClose
                size={30}
                className="hover:text-red-400 md:hidden cursor-pointer"
                onClick={() => setOpenMenu(!openMenu)}
              />
            )}

            <Link to={'/'}>
            <a href="#">
              <img
                src={logo}
                alt=""
                className="w-[5rem] bg-white rounded-full p-1"
              />
            </a>
            </Link>
          </div>
          <div className="flex items-center gap-8 md:hidden">
            <li
              className="ml-4 flex items-center hover:text-green-400"
              onClick={() => setOpenLogin(!openLogin)}
            >
              <FaRegUser className="" />
              <a href="#">
                <span>Logg inn</span>
              </a>
            </li>
            <Badge badgeContent={0} color="success" showZero>
              <FaCartPlus
                size={20}
                className="hover:text-green-400 cursor-pointer"
              />
            </Badge>
          </div>

          <ul className="hidden md:flex items-center gap-4">
            <li className="ml-4 hover:text-green-400">
              <a href="#">Promotions</a>
            </li>
            <li className="ml-4 hover:text-green-400">
              <a href="#">Reward</a>
            </li>
            <li className="ml-4 hover:text-green-400">
              <a href="#">Customer Service</a>
            </li>
            <li className="ml-4 hover:text-green-400">
              <a href="#">Gift card</a>
            </li>
            <li
              className="ml-4 flex items-center hover:text-green-400"
              onClick={() => setOpenLogin(!openLogin)}
            >
              <FaRegUser className="" />
              <a href="#">
                <span>Logg inn</span>
              </a>
            </li>
          </ul>
        </div>
        {/* search bar */}
        <Searchbar />

        {/* menu section */}
        <Menubar />
      </div>

      {/* Hamburger Menu */}
      <div
        className={
          openMenu
            ? "absolute md:hidden top-[140px] w-[100%] h-full bg-black text-white z-30"
            : "absolute md:hidden top-[140px] w-[-100%] h-full bg-black text-white z-30"
        }
      >
        {openMenu ? (
          <div className="w-full p-5" ref={menuRef}>
            <div className="flex flex-col gap-1">
                <Link to={'/product'}>
              <a className="hover:text-green-400 font-bold text-2xl" href="#" onClick={handleClick}>
                Bicycles  
              </a>
                </Link>
              <div className="flex flex-col px-2">
                <a href="#" className="hover:text-green-400">
                  Electrical bicycle
                </a>
                <a href="#" className="hover:text-green-400">
                  Mountain bike
                </a>
                <a href="#" className="hover:text-green-400">
                  Hybrid bike
                </a>
              </div>
            </div>
            <div className="w-full h-[1px] bg-white my-2"></div>
            <div className="flex flex-col gap-1">
              <a className="hover:text-green-400 font-bold text-2xl" href="#">
                Clothes
              </a>
              <div className="flex flex-col px-2">
                <a href="#" className="hover:text-green-400">
                    Lady's Clothes
                </a>
                <a href="#" className="hover:text-green-400">
                  Men's Clothes
                </a>
                <a href="#" className="hover:text-green-400">
                  Childern's Clothes
                </a>
              </div>
            </div>
            <div className="w-full h-[1px] bg-white my-2"></div>
            <div className="flex flex-col gap-1">
              <a className="hover:text-green-400 font-bold text-2xl" href="#">
                Shoes
              </a>
              <div className="flex flex-col px-2">
                <a href="#" className="hover:text-green-400">
                  Lady's Shoes
                </a>
                <a href="#" className="hover:text-green-400">
                  Men's Shoes
                </a>
                <a href="#" className="hover:text-green-400">
                  Children's Shoes
                </a>
              </div>
            </div>
            <div className="w-full h-[1px] bg-white my-2"></div>
          </div>
        ) : (
          ""
        )}
      </div>

      {/* overlay login form */}
      <div>
        <Login open={openLogin} close={() => setOpenLogin(false)} />
      </div>
    </div>
  );
};

export default Navbar;
