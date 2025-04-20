import React, { useContext } from 'react'
import products from '../data/products'
import { CartContext } from '../context/CartContext'

const Home = () => {
  const { addToCart } = useContext(CartContext)

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Featured Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded shadow p-4 hover:shadow-lg transition">
            <img src={product.image} alt={product.name} className="w-full h-60 object-cover rounded mb-4" />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h2>
            <p className="text-lg text-gray-700 mb-2">Ksh {product.price}</p>
            <button
              className="bg-black text-white px-4 py-2 rounded hover:bg-yellow-500 transition"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
