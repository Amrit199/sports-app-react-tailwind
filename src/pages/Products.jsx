import React from 'react'
import ItemCard from '../components/ItemCard'
import { topSellers } from '../store/data'

const Products = () => {
  return (
    <div className="w-full p-5 flex flex-wrap gap-4">
        {topSellers.map((data) => (
          <ItemCard data={data} />
        ))}
      </div>
  )
}

export default Products