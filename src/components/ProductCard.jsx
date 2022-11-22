import React, { useContext } from 'react'
import Button from "../components/Button";
import CartContext from '../store/CartContext';

const ProductCard = ({item}) => {
    const cartBox = useContext(CartContext)

    const CartHandler = (amount) => {
        cartBox.addItem({
            id: item.id,
            description: item.description,
            img: item.img,
            name: item.name,
            price: item.price,
            amount: amount,
        })
    }
  return (
    <div>
              <div className="relative w-full ">
                <div className="absolute w-full">
                  <span className="px-2 text-sm bg-orange-400">Latest</span>
                </div>
                <img src={item.img} className="w-full h-[250px] object-cover" />
                <Button data={CartHandler}/>
              </div>
              <h1 className="font-bold">{item.name}</h1>
              <p className="text-sm">{item.description}</p>
              <div className="my-4 px-2 flex w-full justify-between text-xl font-bold">
                <span className="text-xl">{item.price}</span>
              </div>
    </div>
  )
}

export default ProductCard
