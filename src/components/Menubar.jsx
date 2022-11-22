import React from "react";
import { Badge } from '@mui/material'
import { FaCartPlus } from 'react-icons/fa'
import { useContext } from "react";
import CartContext from "../store/CartContext";

const Menubar = () => {
  const cartBox = useContext(CartContext)
  const {items} = cartBox
  const itemNumbers = items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0)
  return (
    <div className="hidden md:flex justify-between items-center h-7 relative">
      {/* left menu section */}
      <div>
        <div className="peer flex gap-6">
          <div>
            <button className="peer hover:text-green-400">Bicycle</button>
            <div className="hidden peer-hover:flex hover:flex w-full absolute left-0 bg-transparent z-20 justify-between px-6 py-4">
              <div className="flex flex-col gap-4">
                <a className="hover:text-green-400 font-bold text-2xl" href="#">
                  Bicycles
                </a>
                <div className="flex flex-col">
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
                <a href="#" className="hover:text-green-400">
                  ...See more
                </a>
              </div>
              <div className="flex flex-col justify-between">
                <a className="hover:text-green-400 font-bold text-2xl" href="#">
                  Cycling clothing
                </a>
                <div className="flex flex-col">
                  <a href="#" className="hover:text-green-400">
                    Cycling jackets
                  </a>
                  <a href="#" className="hover:text-green-400">
                    Cycling jerseys
                  </a>
                  <a href="#" className="hover:text-green-400">
                    Cycling pants
                  </a>
                </div>
                <a href="#" className="hover:text-green-400">
                  ...See more
                </a>
              </div>
              <div className="flex flex-col justify-between">
                <a className="hover:text-green-400 font-bold text-2xl" href="#">
                  Helment and bicycle transport
                </a>
                <div className="flex flex-col">
                  <a href="#" className="hover:text-green-400">
                    Bicycle helmets
                  </a>
                  <a href="#" className="hover:text-green-400">
                    Child seat and accessories
                  </a>
                  <a href="#" className="hover:text-green-400">
                    Bicycle tailer
                  </a>
                </div>
                <a href="#" className="hover:text-green-400">
                  ...See more
                </a>
              </div>
            </div>
          </div>
          <div>
            <button className="peer hover:text-green-400">Clothes</button>
            <div className="hidden peer-hover:flex hover:flex w-full absolute left-0 bg-transparent z-20 justify-between px-6 py-4">
              <div className="flex flex-col gap-4">
                <a className="hover:text-green-400 font-bold text-2xl" href="#">
                  Lady clothes
                </a>
                <div className="flex flex-col">
                  <a href="#" className="hover:text-green-400">
                    Jackets
                  </a>
                  <a href="#" className="hover:text-green-400">
                    Trousers
                  </a>
                  <a href="#" className="hover:text-green-400">
                    Inner wear
                  </a>
                </div>
                <a href="#" className="hover:text-green-400">
                  ...See more
                </a>
              </div>
              <div className="flex flex-col justify-between">
                <a className="hover:text-green-400 font-bold text-2xl" href="#">
                  Men clothes
                </a>
                <div className="flex flex-col">
                  <a href="#" className="hover:text-green-400">
                    Jackets
                  </a>
                  <a href="#" className="hover:text-green-400">
                    Trousers
                  </a>
                  <a href="#" className="hover:text-green-400">
                    Inner wear
                  </a>
                </div>
                <a href="#" className="hover:text-green-400">
                  ...See more
                </a>
              </div>
              <div className="flex flex-col justify-between">
                <a className="hover:text-green-400 font-bold text-2xl" href="#">
                  Children clothes
                </a>
                <div className="flex flex-col">
                  <a href="#" className="hover:text-green-400">
                    Jackets
                  </a>
                  <a href="#" className="hover:text-green-400">
                    Trousers
                  </a>
                  <a href="#" className="hover:text-green-400">
                    Inner wear
                  </a>
                </div>
                <a href="#" className="hover:text-green-400">
                  ...See more
                </a>
              </div>
            </div>
          </div>
          <div>
            <button className="peer hover:text-green-400">Shoe</button>
            <div className="hidden peer-hover:flex hover:flex w-full absolute left-0 bg-transparent z-20 justify-between px-6 py-4">
              <div className="flex flex-col gap-4">
                <a className="hover:text-green-400 font-bold text-2xl" href="#">
                  Lady shoes
                </a>
                <div className="flex flex-col">
                  <a href="#" className="hover:text-green-400">
                    Running shoes
                  </a>
                  <a href="#" className="hover:text-green-400">
                    Hiking boots
                  </a>
                  <a href="#" className="hover:text-green-400">
                    Leisure shoes
                  </a>
                </div>
                <a href="#" className="hover:text-green-400">
                  ...See more
                </a>
              </div>
              <div className="flex flex-col justify-between">
                <a className="hover:text-green-400 font-bold text-2xl" href="#">
                  Men shoes
                </a>
                <div className="flex flex-col">
                  <a href="#" className="hover:text-green-400">
                    Running shoes
                  </a>
                  <a href="#" className="hover:text-green-400">
                    Hiking boots
                  </a>
                  <a href="#" className="hover:text-green-400">
                    Leisure shoes
                  </a>
                </div>
                <a href="#" className="hover:text-green-400">
                  ...See more
                </a>
              </div>
              <div className="flex flex-col justify-between">
                <a className="hover:text-green-400 font-bold text-2xl" href="#">
                  Children shoes
                </a>
                <div className="flex flex-col">
                  <a href="#" className="hover:text-green-400">
                    Running shoes
                  </a>
                  <a href="#" className="hover:text-green-400">
                    Waterproof shoes
                  </a>
                  <a href="#" className="hover:text-green-400">
                    Rubber boots
                  </a>
                </div>
                <a href="#" className="hover:text-green-400">
                  ...See more
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden peer-hover:flex hover:flex absolute left-0 w-full h-56 bg-black z-10"></div>
      </div>
      {/* shopping cart icon */}
      <div className="hidden md:flex">
        <Badge badgeContent={itemNumbers} color="success" showZero>
          <FaCartPlus
            size={20}
            className="hover:text-green-400 cursor-pointer"
          />
        </Badge>
      </div>
    </div>
  );
};

export default Menubar;
