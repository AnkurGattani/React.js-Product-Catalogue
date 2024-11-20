import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {
	const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
	  <header className='w-full h-[10vh] px-5 py-2 duration-300 fixed z-50 border-b-2 border-black backdrop-blur-md bg-white/30'>
		  <div className='w-full h-full mx-auto relative flex justify-between items-center py-3 '>
			  <div className='h-full p-0 flex items-center'>
				  <Link to="/" >
					  <h1 className='text-2xl font-bold'>Product Catalog</h1>
				  </Link>
			  </div>
				<div>

				  <Link to="/cart" className="relative">
					  <span className="text-lg font-bold">Cart</span>
					  {totalQuantity > 0 && (
						  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-sm rounded-full w-5 h-5 flex items-center justify-center">
							  {totalQuantity}
						  </span>
					  )}
				  </Link>
			  </div>
		  </div>
	  </header>
  )
}

export default Header