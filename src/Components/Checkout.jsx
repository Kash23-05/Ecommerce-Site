import React from 'react';

const Checkout = () => {
  const handleOrder = () => {
    alert('Order placed successfully!');
    alert("Thank you for shopping ! 🎉");
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{fontFamily:"Courier New"}}>~Checkout~</h2>
      <button onClick={handleOrder}>Place Order</button>
    </div>
  );
};

export default Checkout;
