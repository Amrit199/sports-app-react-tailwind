import React from "react";

const HeroCard = ({ data, des, title }) => {
  return (
    <div className="w-full m-3 relative">
      <div className="absolute p-4 top-4 text-white">
        <p>{des}</p>
        <h1 className="font-bold text-2xl">{title}</h1>
      </div>
      <div className="absolute font-bold px-5 py-3 m-5 
      bottom-3 bg-white text-black 
      hover:bg-green-400 rounded-md">
        <button>See the entire selection from silva</button>
      </div>
      <img src={data} alt="" className="w-full max-h-[500px]"/>
    </div>
  );
};

export default HeroCard;
