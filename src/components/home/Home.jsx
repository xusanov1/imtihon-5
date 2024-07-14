import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import IntroImage from '../../assets/banner.png';
import StarRating from "../starRating/StarRating";

import './Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [topRatedProducts, setTopRatedProducts] = useState([]);

  useEffect(() => {
    fetch("https://back-commerce-production.up.railway.app/api/v1/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        const sortedProducts = data.sort((a, b) => b.rating - a.rating);
        setTopRatedProducts(sortedProducts.slice(0, 4));
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const loadMoreProducts = () => {
    setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 4);
  };

  return (
    <div>
      <div className="banner">
        <img src={IntroImage} alt="Intro Image" />
      </div>
      <div className="container">
        <div className="mainwrapper">
          <h2 className="all-products-title">ALL PRODUCTS</h2>
          {products.length > 0 ? (
            <>
              <ul className="products-grid">
                {products.slice(0, visibleProducts).map((product) => (
                  <div className="product-card" key={product.id}>
                    <li>
                      <Link to={`/product/${product.id}`}>
                        <img className="product-image" src={product.image} alt={product.name} />
                      </Link>
                      <div className="product-info">
                        <h2 className="product-name">{product.name}</h2>
                        <StarRating className="star-rating" rating={product.rating} />
                        <p className="product-price">
                          {product.price}$ <span className="underline-text">$534.33</span> <span className="red-text">24% Off</span>
                        </p>
                      </div>
                    </li>
                  </div>
                ))}
              </ul>
              {visibleProducts < products.length && (
                <button className="load-more-btn" onClick={loadMoreProducts}>
                  Load More
                </button>
              )}
              <h2 className="top-products-title">TOP RATED PRODUCTS</h2>
              <ul className="products-grid">
                {topRatedProducts.map((product) => (
                  <div className="product-card" key={product.id}>
                    <li>
                      <Link to={`/product/${product.id}`}>
                        <img className="product-image" src={product.image} alt={product.name} />
                      </Link>
                      <div className="product-info">
                        <h2 className="product-name">{product.name}</h2>
                        <StarRating className="star-rating" rating={product.rating} />
                        <p className="product-price">
                          {product.price}$ <span className="underline-text">$534.33</span> <span className="red-text">24% Off</span>
                        </p>
                      </div>
                    </li>
                  </div>
                ))}
              </ul>
            </>
          ) : (
            <p>No products available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
