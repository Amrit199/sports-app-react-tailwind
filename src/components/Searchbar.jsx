import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Searchbar = () => {
  return (
    <label className="relative flex items-center my-3">
      <AiOutlineSearch size={25} className="absolute text-black pl-2 w-10" />
      <input
        type="text"
        className="bg-white w-full py-2 pl-11 pr-3 block placeholder:text-black placeholder:font-bold
                rounded-md"
        placeholder="sok etter produkter"
      />
    </label>
  );
};

export default Searchbar;
