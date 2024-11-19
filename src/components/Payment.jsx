import React, { useState } from 'react';
import { useStateValue } from './StateProvider'; // Ensure you have the context for basket

function Payment() {
  const [paymentStatus, setPaymentStatus] = useState('');
  
  const [{ basket }, dispatch] = useStateValue();

  // Calculate the total price of the items in the basket dynamically
  const calculateTotal = () => {
    return basket?.reduce((amount, item) => item.price * item.quantity + amount, 0).toFixed(2);
  };

  const handlePayment = () => {
    // Simulate a payment process
    setPaymentStatus('Processing payment...');

    setTimeout(() => {
      // Simulate success after 3 seconds
      setPaymentStatus('Payment Successful!');
    }, 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Payment</h1>

        {/* Dynamically display the payment amount */}
        <div className="mb-4">
          <p className="text-lg">Amount: ${calculateTotal()}</p>
        </div>

        {/* Payment Status */}
        <div className="mb-4">
          {paymentStatus && <p className="text-xl font-semibold">{paymentStatus}</p>}
        </div>

        {/* Pay Now Button */}
        <button
          onClick={handlePayment}
          className="bg-yellow-500 text-white py-2 px-4 rounded-lg text-xl"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}

export default Payment;
