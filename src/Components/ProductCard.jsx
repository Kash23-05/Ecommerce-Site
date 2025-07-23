import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, addToCart }) => {
  const handleAddToCart=(e)=>{
    e.preventDefault();
    addToCart(product);
  }
  return (
    <div className="product-card">
  <img src={product.image} alt={product.title} />
  <h4>{product.title.slice(0, 30)}...</h4>
  <p>${product.price}</p>
  <button type="button" onClick={handleAddToCart}>Add to Cart</button>
  <Link to={`/product/${product.id}`}>
        <button style={{ marginTop: '10px', marginLeft: '5px' }}>
          Open
        </button>
      </Link>
</div>

  );
};

export default ProductCard;
