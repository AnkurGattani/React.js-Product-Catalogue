import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setProducts, filterByCategory, searchByName } from '../store/productSlice.js'
import ProductCard from '../components/ProductCard.jsx'
import productsData from '../products.json'

function ProductListPage() {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.filteredProducts);
  const categories = ["Electronics", "Books", "Clothing", "Toys", "Home Appliances"];
  const selectedCategories = useSelector((state) => state.products.selectedCategories);

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch('https://run.mocky.io/v3/fc3d6e02-7776-4c4a-b359-38586557bc04')
      .then((response) => response.json())
      .then((data) => dispatch(setProducts(data))); // for data from API
    // dispatch(setProducts(productsData)); // for static data

  }, [dispatch]);

  const handleCategoryChange = (category) => {
    dispatch(filterByCategory(category));
  }

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    dispatch(searchByName(searchQuery));
  }

  return (
    <div className='w-full mt-[5vh] min-h-[5vh] flex flex-col items-center justify-center'>
      {/* Search Bar */}
      <div className="mb-4 w-80">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search for products..."
          className="border border-gray-300 rounded-md p-2 w-full"
        />
      </div>

      {/* Category Filters */}
      <div className="mb-4 items-center flex flex-wrap gap-2">
        Categories: 
        {categories.map((category) => (
          <label
            key={category}
            className={`cursor-pointer px-4 py-2 rounded-md border ${selectedCategories.includes(category)
              ? "bg-blue-500 text-white"
              : "bg-gray-100 text-gray-700 "
              }`}
          >
            <input
              type="checkbox"
              value={category}
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
              className="hidden"
            />
            {category}
          </label>
        ))}
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
        {
          products.length > 0 ? (
            products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                image={product.image}
                price={product.price}
                category={product.category}
              />
            ))
          ) : (
            <h3 className='text-2xl items-center justify-center'> No products to display! </h3>
          )
        }

      </div>

    </div>
  )
}

export default ProductListPage