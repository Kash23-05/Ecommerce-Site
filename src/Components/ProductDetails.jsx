// Components/ProductDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '20px' }}>
      <img src={product.image} alt={product.title} width="100%" height="300px" 
      style={{ marginTop:'30px',padding:'50px',display:'flex',objectFit: 'contain',justifyContent:'center'}} />
      <h2>{product.title}</h2>
      <p><strong>Price:</strong> ${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;


