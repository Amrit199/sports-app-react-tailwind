import React from "react";

const ItemCard = ({data}) => {

  return (
    <div className="max-w-[200px] cursor-pointer m-3">
      <img
        src={data?.img}
        alt=""
        className="w-full h-[200px]"
      />
      <div className="my-3">
        <h2 className="font-bold">{data?.name}</h2>
        <p>{data?.description}</p>
      </div>
      <h1 className="font-bold text-xl">{data?.price}</h1>
    </div>
  );
};

export default ItemCard;
