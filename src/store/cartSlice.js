import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	items: [], 
	totalQuantity: 0, 
	totalPrice: 0
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const product = action.payload;
			const existingItem = state.items.find((item) => item.id === product.id);

			if (existingItem) {
				existingItem.quantity += 1;
			} else {
				state.items.push({ ...product, quantity: 1 });
			}

			state.totalQuantity += 1;
			state.totalPrice += product.price;
		},
		removeFromCart: (state, action) => {
			const id = action.payload;
			const item = state.items.find((item) => item.id === id);

			if (item) {
				state.totalQuantity -= item.quantity;
				state.totalPrice -= item.price * item.quantity;
				state.items = state.items.filter((item) => item.id !== id);
			}
		},
		updateQuantity: (state, action) => {
			const { id, quantity } = action.payload;
			const item = state.items.find((item) => item.id === id);

			if (item && quantity > 0) {
				state.totalQuantity += quantity - item.quantity;
				state.totalPrice += (quantity - item.quantity) * item.price;
				item.quantity = quantity;
			}
		},
		clearCart: (state) => {
			state.items = [];
			state.totalQuantity = 0;
			state.totalPrice = 0;
		},
	},
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
