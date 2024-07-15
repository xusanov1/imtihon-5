import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const ProfilePage = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    richDescription: '',
    image: '',
    brand: '',
    price: '',
    countInStock: '',
    rating: '',
    numReviews: '',
    isFeatured: false
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://backend-e-commerce-production.up.railway.app/api/v1/products', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        });
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewProduct({ ...newProduct, [name]: type === 'checkbox' ? checked : value });
  };

  const handleCreate = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://backend-e-commerce-production.up.railway.app/api/v1/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct)
      });

      if (response.ok) {
        const createdProduct = await response.json();
        alert('Product created successfully!');
        setProducts([...products, createdProduct]);
        setNewProduct({
          name: '',
          description: '',
          richDescription: '',
          image: '',
          brand: '',
          price: '',
          countInStock: '',
          rating: '',
          numReviews: '',
          isFeatured: false
        });
      } else {
        const data = await response.json();
        setError(data.message || 'Creation failed');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (productId) => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`https://backend-e-commerce-production.up.railway.app/api/v1/products/${productId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.ok) {
        alert('Product deleted successfully!');
        setProducts(products.filter((item) => item.id !== productId));
      } else {
        const data = await response.json();
        setError(data.message || 'Delete failed');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="profile-container">
      <h2>Products Management</h2>
      {error && <p className="error-message">{error}</p>}
      
      <div className="product-form">
        <h3>Add New Product</h3>
        <input
          type="text"
          name="name"
          value={newProduct.name}
          onChange={handleInputChange}
          placeholder="Product Name"
          required
        />
        <input
          type="text"
          name="description"
          value={newProduct.description}
          onChange={handleInputChange}
          placeholder="Product Description"
          required
        />
        <textarea
          name="richDescription"
          value={newProduct.richDescription}
          onChange={handleInputChange}
          placeholder="Product Rich Description"
          required
        />
        <input
          type="text"
          name="image"
          value={newProduct.image}
          onChange={handleInputChange}
          placeholder="Product Image URL"
          required
        />
        <input
          type="text"
          name="brand"
          value={newProduct.brand}
          onChange={handleInputChange}
          placeholder="Product Brand"
          required
        />
        <input
          type="number"
          name="price"
          value={newProduct.price}
          onChange={handleInputChange}
          placeholder="Product Price"
          required
        />
        <input
          type="number"
          name="countInStock"
          value={newProduct.countInStock}
          onChange={handleInputChange}
          placeholder="Count In Stock"
          required
        />
        <input
          type="number"
          name="rating"
          value={newProduct.rating}
          onChange={handleInputChange}
          placeholder="Product Rating"
          required
        />
        <input
          type="number"
          name="numReviews"
          value={newProduct.numReviews}
          onChange={handleInputChange}
          placeholder="Number of Reviews"
          required
        />
        <label>
          <input
            type="checkbox"
            name="isFeatured"
            checked={newProduct.isFeatured}
            onChange={handleInputChange}
          />
          Is Featured
        </label>
        <button type="button" onClick={handleCreate} disabled={loading}>
          {loading ? 'Creating...' : 'Create'}
        </button>
      </div>

      <div className="products-list">
        <h3>Your Products</h3>
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <p><strong>Name:</strong> {product.name}</p>
            <p><strong>Price:</strong> {product.price}</p>
            <p><strong>Description:</strong> {product.description}</p>
            <button className="delete-button" onClick={() => handleDelete(product.id)} disabled={loading}>
              {loading ? 'Deleting...' : 'Delete'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
