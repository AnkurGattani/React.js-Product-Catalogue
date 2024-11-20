import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity, clearCart } from "../store/cartSlice";

function  CartPage() {
	const { items, totalQuantity, totalPrice } = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	const handleRemove = (id) => dispatch(removeFromCart(id));
	const handleClearCart = () => dispatch(clearCart());
	const handleQuantityChange = (id, quantity) => {
		if (quantity > 0) dispatch(updateQuantity({ id, quantity }));
	};

	if (items.length === 0) {
		return <p className="mx-auto flex min-h-full items-center justify-center text-center text-2xl">Your cart is empty!</p>;
	}

	return (
		<div className="container mx-auto px-4 py-10">
			<h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
			<ul className="space-y-4">
				{items.map((item) => (
					<li key={item.id} className="flex items-center justify-between">
						<div>
							<h2 className="text-xl">{item.name}</h2>
							<p className="text-gray-600">Price: ${item.price}</p>
							<p className="text-gray-600">Quantity: {item.quantity}</p>
						</div>
						<div className="flex gap-4">
							<input
								type="number"
								min="1"
								value={item.quantity}
								onChange={(e) => handleQuantityChange(item.id, +e.target.value)}
								className="w-16 border border-gray-300 rounded px-2"
							/>
							<button
								onClick={() => handleRemove(item.id)}
								className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
							>
								Remove
							</button>
						</div>
					</li>
				))}
			</ul>
			<div className="mt-6">
				<p>Total Quantity: {totalQuantity}</p>
				<p>Total Price: ${totalPrice}</p>
				<button
					onClick={handleClearCart}
					className="mt-4 bg-gray-500 text-white px-6 py-3 rounded-md hover:bg-gray-600"
				>
					Clear Cart
				</button>
			</div>
		</div>
	);
};

export default CartPage;
