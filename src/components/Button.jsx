import React from "react";

const Button = (props) => {
  const AddToCart = (e) => {
    e.preventDefault()

    const addAmount = 1
    props.data(addAmount)
  };
  return (
    <div
      className="absolute right-0 bottom-0 text-base bg-green-800 text-white px-5 py-2 rounded-lg hover:text-xl"
      onClick={AddToCart}
    >
      Add to Cart
    </div>
  );
};

export default Button;
