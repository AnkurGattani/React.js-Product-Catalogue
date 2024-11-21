
# React Product Catalog - Meraken Assignment

A simple, responsive Product Catalog built using **React.js**, with features such as product listing, search functionality, category filtering, product details page, and an optional cart feature.




## Table of Contents

- [Setup & Installation](#setup--installation)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Challenges faced](#challenges-faced)


## Setup & Installation

To run this application locally, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/AnkurGattani/React.js-Product-Catalogue.git
```
2. Navigate to the project directory:
```bash 
cd React.js-Product-Catalogue
```
3. Install dependencies: If you haven't already installed the dependencies, run the following command:
```bash
  npm install
```
4. Start the application: Run the application locally using:
```bash
  npm run dev
```
This will start the development server, and you can open the application by navigating to `http://localhost:5173` in your web browser.


## Tech Stack
- **React.js:** For building the user interface and managing state.
- **React Router:** For navigation between pages.
- **Tailwind CSS:** For styling the components.
- **Redux Toolkit:** For state management (used for cart functionality).
- **Mocky API:** For creating a mock API to fetch product data.

## Features

### Product Listing
- Displays a grid of products with basic information: name, price, and image.
- Each product has a "View Details" button to view more information.

### Product Details
- Displays the name, price, image, description, and category of the selected product.
- Users can navigate back to the product listing from the details page.

### Search Functionality
- Includes a search bar at the top to filter products by name. The product listing updates in real-time as the user types in the search box.
- Category Filter - Users can filter products by selecting one or more categories.
### Optional Enhancements 
- Cart Functionality: Allows users to add products to the cart and view the cart's total price and quantity.
- Animations: Added hover effects and smooth transitions on product cards for a better user experience.
- Custom Styles: Tailwind CSS is used for custom styling to avoid reliance on heavy UI frameworks.
## Challenges faced

1. Managing Multi-Category Filters:

    **Problem:** Handling multiple categories for filtering required combining logic dynamically.

    **Solution:** Used Redux Toolkit to store selected categories in an array and applied conditional filtering.

2. Styling Header and Cards with Overlap:

    **Problem:** Ensuring the header remained fixed with proper z-index without affecting card scrolling.

    **Solution:** Used Tailwind's z-index for the header and added a margin to the product list.

3. Real-Time Search:

**Problem:** Combining search and filters dynamically was challenging.

**Solution:** Updated filtered products using useSelector and Redux actions.

## Screenshots
Product Listings
![image](https://github.com/user-attachments/assets/765707a9-7084-49e8-995b-30cee7e852d5) 

Selecting one or more categories
![image](https://github.com/user-attachments/assets/753ab580-5290-4787-8645-08b76d65bd2c)

Search products across categories
![image](https://github.com/user-attachments/assets/b20e0b8d-618b-413d-b853-ae59b404ba95)

Product Details page
![image](https://github.com/user-attachments/assets/30d93ba7-3bf1-4d9c-82af-e9f401d9b95a)

Cart Page
![image](https://github.com/user-attachments/assets/eed7680c-5ab3-414e-b34c-dabaac92691b)



