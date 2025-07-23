import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard.jsx';

const ProductList =({addToCart})=>{
    const[products,setProducts] = useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json => setProducts(json));
          },[]);
          
      return (
    <div className="product-list">
  {products.map(product => (
    <ProductCard 
      key={product.id}
      product={product} 
      addToCart={addToCart}/>
  ))}
</div>

  );
}
export default ProductList;





// <Link to={`/product/${product.id}`}>
//         <button style={{ marginTop: '10px', backgroundColor: '#007bff', color: 'white' }}>
//           Open
//         </button>
//       </Link>
// import { Link } from 'react-router-dom';