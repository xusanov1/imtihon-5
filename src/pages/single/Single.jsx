import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlineLike } from "react-icons/ai";
import StarRating from '../../components/starRating/StarRating'
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import Line from '../../assets/single-line.png'
import { useCart } from '../../context/CardContext';
import { Link } from "react-router-dom"

// import './Single.css'
import "./Single.css";

const SinglePage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(
      `https://back-commerce-production.up.railway.app/api/v1/products/${id}`
    )
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error fetching product:', error));
  }, [id]);

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, quantity });
    }
  };


  return (
    <div className="container">
      <div className="single-product-container">
        {product ? (
          <div className="product-details">
            <img className='product-img' src={product.image} alt={product.name} />
            <div className="single-info">
              <h2 className='single-product-name'>{product.name}</h2>
              <span className='rating-reviews'> <span><StarRating rating={product.rating} /></span> <span className='reviews'> {product.numReviews} reviews</span> <span className='submit'>Submit a review</span></span>
              <p className="single-price"> <span className='blue-text'>{product.price}$</span>  <span className="underline-text">$534.33</span> <span className="red-text">24% Off</span></p>  
              <p className="single-stock"><span>Availability:</span><span>In stock:{product.countInStock}</span></p>    
              <p className="single-brand"><span>Brand: </span><span> {product.brand}</span></p>     
              <p className='free-shiping'>Free shipping</p>   
              <div className="add-to">
                <div className="quantity-control">
                  <button className="quantity-button" onClick={decreaseQuantity}>-</button>
                  <span>{quantity}</span>
                  <button className="quantity-button" onClick={increaseQuantity}>+</button>
                </div>
                <div className="action-buttons">
                  <Link to="/cart"><button className="add-to-cart-button" onClick={handleAddToCart}><MdOutlineShoppingCart /> Add To Cart</button></Link>
                  <button className="like-button"><AiOutlineLike /></button>
                </div>
              </div>
              <div className="social-media">
                <button className='facebook-btn'><FaFacebookF /> Share on Facebook</button>
                <button className='twitter-btn'><IoLogoTwitter /> Share on Twitter</button>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="single-description">
        <h3 className='single-h3'>Product Information</h3>
        <img src={Line} alt="line" />
        <p className='single-p'>{product?.description}</p>
      </div>
    </div>
  );
};


export default SinglePage;

