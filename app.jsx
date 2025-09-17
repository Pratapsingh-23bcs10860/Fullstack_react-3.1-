import React from "react";

// ProductCard component
const ProductCard = ({ name, price, status }) => {
  return (
    <div className="card">
      <h3 className="card-title">{name}</h3>
      <p>Price: ${price}</p>
      <p>Status: {status}</p>
    </div>
  );
};

// Parent component
const App = () => {
  const products = [
    { name: "Wireless Mouse", price: 25.99, status: "In Stock" },
    { name: "Keyboard", price: 45.5, status: "Out of Stock" },
    { name: "Monitor", price: 199.99, status: "In Stock" },
  ];

  return (
    <div className="container">
      <h2 className="title">Products List</h2>
      <div className="product-list">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            status={product.status}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
