import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the route
  const product = useSelector((state) =>
    state.products.products.find((item) => item.id == id)
  );
  console.log(product);

  if (!product) {
    return <p className="text-center text-lg text-gray-500">Product not found.</p>;
  }

  const dispatch = useDispatch();
  const handleAddToCart = () => { 
    dispatch(addToCart(product));
  };

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Back Button */}
      <button
        onClick={() => window.history.back()}
        className="mb-4 bg-gray-200 text-gray-800 px-4 py-2 rounded-md shadow hover:bg-gray-300 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
      >
        ← Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Product Image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="rounded-lg w-full h-96 object-cover shadow-lg"
          />
        </div>

        
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl text-gray-800 font-semibold mb-2">
            ${product.price}
          </p>
          <p className="text-gray-700  mb-6">{product.description}</p>

          <p className="text-sm text-gray-500  mb-4">
            <span className="font-bold">Category:</span> {product.category}
          </p>

          <div className="flex gap-4">
            <button 
            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 shadow"
            onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
