import React, { useEffect, useState } from 'react';

const ProductListPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetching dummy data from an API
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="product-list-page">
      <h1>Products</h1>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} width="150" />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
