import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const OrderConfirmation = () => {
  const { currentOrder } = useSelector((state) => state.orders);
  const navigate = useNavigate();

  if (!currentOrder) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">No Order Found</h2>
          <button
            onClick={() => navigate('/menu')}
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Back to Menu
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <div className="text-center mb-8">
          <svg
            className="mx-auto h-12 w-12 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <h2 className="mt-4 text-2xl font-bold text-gray-900">
            Order Confirmed!
          </h2>
          <p className="mt-2 text-gray-600">
            Thank you for your order. We've received it and are preparing your food.
          </p>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Order Details
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Order Number</span>
              <span className="font-medium">{currentOrder.orderId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Delivery Address</span>
              <span className="font-medium text-right max-w-xs">
                {currentOrder.customer.address}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Payment Method</span>
              <span className="font-medium capitalize">
                {currentOrder.paymentMethod.replace('_', ' ')}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Total Amount</span>
              <span className="font-medium">${currentOrder.total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <button
            onClick={() => navigate('/menu')}
            className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Back to Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;