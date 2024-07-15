import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import IntroImage from '../../assets/banner.png';
import StarRating from "../starRating/StarRating";
import AdidasImg from '../../assets/adidas.png';
import GroupImg from '../../assets/group.png';

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
        <img  src={IntroImage} alt="Intro Image" className="banner-image" />
      </div>

      <div className="container ">
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
          </>
        ) : (
          <p>No products available.</p>
        )}
      </div>

      <section className="adidas-section">
        <div className="container">
          <div className="adidas">
            <div className="adidas-info">
              <h2>Adidas Men Running Sneakers</h2>
              <p>Performance and design. Taken right to the edge.</p>
              <a href="#">SHOP NOW</a>
            </div>
            <div className="adidas-img">
              <img src={AdidasImg} alt="Adidas Men Running Sneakers" />
            </div>
          </div>
        </div>
      </section>

      <section className="group-section">
        <div className="container">
          <img src={GroupImg} alt="group images" />
          <div className="group-text">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
      </section>

      <div className="container">
        <h2 className="top-products-title">MOST TOP RATED PRODUCTS</h2>
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
      </div>
    </div>
  );
};

export default Home;
