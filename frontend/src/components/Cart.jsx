import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity, clearCart } from '../store/cartSlice.js';
import { HTTP_STATUS } from '../constants/httpStatus.js';
import { checkout } from '../store/cartThunk.js';

const CartPage = () => {
  const dispatch = useDispatch();
  const { items, total, loading, error } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  const handleCheckout = () => {
    if (user) {
      dispatch(checkout(items));
    } else {
      // Redirect to login or show login modal
      alert('Please login to complete your order');
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Cart is Empty</h2>
          <p className="text-gray-600 mb-6">Looks like you haven't added any items yet</p>
          <a 
            href="/menu" 
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Browse Menu
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Order</h1>
        
        {/* Cart Items */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
          {items.map((item) => (
            <div key={item.id} className="p-4 border-b border-gray-200 last:border-b-0">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                <span className="text-indigo-600 font-bold">${item.price.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center">
                  <button 
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="mx-4">{item.quantity}</span>
                  <button 
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
                <button 
                  onClick={() => dispatch(removeItem(item.id))}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>
          
          <div className="space-y-3 mb-6">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Delivery Fee</span>
              <span className="font-medium">$2.99</span>
            </div>
            <div className="flex justify-between border-t border-gray-200 pt-3">
              <span className="text-gray-900 font-bold">Total</span>
              <span className="text-indigo-600 font-bold">${(total + 2.99).toFixed(2)}</span>
            </div>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
              {error}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => dispatch(clearCart())}
              className="flex-1 py-3 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            >
              Clear Cart
            </button>
            <button
              onClick={handleCheckout}
              disabled={loading}
              className={`flex-1 py-3 px-4 rounded-md text-white ${loading ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700'} transition-colors`}
            >
              {loading ? 'Processing...' : 'Checkout'}
            </button>
          </div>
        </div>

        {/* Delivery Info */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Delivery Information</h2>
          {user ? (
            <div className="space-y-2">
              <p className="text-gray-600">Delivering to: {user.address || 'No address saved'}</p>
              <p className="text-gray-600">Phone: {user.phone || 'Not provided'}</p>
              <a href="/profile" className="text-indigo-600 hover:underline">
                Update delivery info
              </a>
            </div>
          ) : (
            <div>
              <p className="text-gray-600 mb-4">Please login to set delivery information</p>
              <a href="/login" className="text-indigo-600 hover:underline">
                Login or Create Account
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;