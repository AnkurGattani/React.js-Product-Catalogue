import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	products: [],
	filteredProducts: [],
	selectedCategories: [],
	searchQuery: ""
};

const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		setProducts: (state, action) => {
			state.products = action.payload;
			state.filteredProducts = action.payload; // initially all the products are displayed
			state.selectedCategories = [];
			state.search = "";
		},
		filterByCategory: (state, action) => {
			const category = action.payload;
			if (state.selectedCategories.includes(category)) {	// if the category is already selected, remove it
				state.selectedCategories = state.selectedCategories.filter((selectedCategory) => selectedCategory !== category);
			} else { // if the category is not selected, add it
				state.selectedCategories.push(category);
			}
			state.filteredProducts = state.products.filter((product) =>
				(state.selectedCategories.length === 0 || state.selectedCategories.includes(product.category))
				&&
				(state.searchQuery === "" || product.name.toLowerCase().includes(state.searchQuery.toLowerCase()))
			);	// filter the products based on selected categories and search query
		},
		searchByName: (state, action) => {
			state.searchQuery = action.payload;
			state.filteredProducts = state.products.filter((product) =>
				(state.selectedCategories.length === 0 || state.selectedCategories.includes(product.category)) && (product.name.toLowerCase().includes(action.payload.toLowerCase()))
			); // filter the products based on search query
		}
	}
});

export const { setProducts, filterByCategory, searchByName } = productSlice.actions;

export default productSlice.reducer;