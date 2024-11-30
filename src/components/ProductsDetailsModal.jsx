import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import {  Link } from "react-router-dom";

function ProductsDetailsModal({ product, onClose }) {

	const { items } = useSelector((state) => state.cart);

	const isProductInCart = items.some((item) => item.id === product.id);

	const dispatch = useDispatch();

	const handleAddToCart = () => {
		dispatch(addToCart(product));
	};

	return (
		<>
			<div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
				<div
					className="relative w-full sm:w-3/4 lg:w-1/2 h-[600px] overflow-y-auto bg-white text-black rounded-2xl shadow p-6"
				>
					{/* Close Button */}
					<button
						className="absolute top-4 right-4 p-2 bg-gray-100 text-black rounded-full hover:bg-gray-200"
						onClick={onClose}
					>
						✕
					</button>

					<div className="w-full grid grid-cols-1 gap-10">
						{/* Product Image */}
						<div>
							<img
								src={product.image}
								alt={product.name}
								className="rounded-lg w-full h-96 object-contain shadow-lg"
							/>
						</div>

						{/* Product Details */}
						<div>
							<h1 className="text-3xl font-bold mb-4">{product.name}</h1>
							<p className="text-xl text-gray-800 font-semibold mb-2">
								₹{product.price}
							</p>
							<p className="text-gray-700 mb-6">{product.description}</p>

							<p className="text-sm text-gray-500 mb-4">
								<span className="font-bold">Category:</span> {product.category}
							</p>

							<div className="flex gap-4">
								{isProductInCart ? (
									<Link
										to="/cart"
										className="flex-1 px-4 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 text-center"
									>
										Added to Cart
									</Link>
								) : (
								<button
											className="flex-1 px-4 py-2.5 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 text-center shadow"
									onClick={handleAddToCart}
								>
									Add to Cart
								</button>)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ProductsDetailsModal;
