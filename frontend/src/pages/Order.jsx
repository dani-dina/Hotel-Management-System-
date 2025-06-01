import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const OrderPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  //data fetch 
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setTimeout(() => {
          const mockOrders = [
            {
              orderId: 'ORD-2023-001',
              guestId: 'GUEST-001',
              discount: 10,
              totalAmount: 450,
              paymentStatus: 'paid',
              orderStatus: 'delivered',
              orderedDate: new Date('2023-05-15'),
              deliveryDate: new Date('2023-05-17'),
              orderItem: [
                {
                  productId: 'PROD-001',
                  itemName: 'Luxury Breakfast Package',
                  itemQuantity: 2,
                  price: 150
                },
                {
                  productId: 'PROD-002',
                  itemName: 'Spa Treatment',
                  itemQuantity: 1,
                  price: 200
                }
              ]
            },
            {
              orderId: 'ORD-2023-002',
              guestId: 'GUEST-002',
              discount: 0,
              totalAmount: 320,
              paymentStatus: 'pending',
              orderStatus: 'processing',
              orderedDate: new Date('2023-05-18'),
              deliveryDate: null,
              orderItem: [
                {
                  productId: 'PROD-003',
                  itemName: 'Room Service Dinner',
                  itemQuantity: 1,
                  price: 320
                }
              ]
            },
            {
              orderId: 'ORD-2023-003',
              guestId: 'GUEST-003',
              discount: 15,
              totalAmount: 680,
              paymentStatus: 'paid',
              orderStatus: 'completed',
              orderedDate: new Date('2023-05-20'),
              deliveryDate: new Date('2023-05-20'),
              orderItem: [
                {
                  productId: 'PROD-004',
                  itemName: 'Mini Bar Refill',
                  itemQuantity: 1,
                  price: 80
                },
                {
                  productId: 'PROD-005',
                  itemName: 'Airport Transfer',
                  itemQuantity: 2,
                  price: 300
                }
              ]
            }
          ];
          setOrders(mockOrders);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const filteredOrders = filter === 'all' 
    ? orders 
    : orders.filter(order => 
        filter === 'payment' 
          ? order.paymentStatus === 'pending'
          : order.orderStatus === filter
      );

  const getStatusBadge = (status, type) => {
    const baseClasses = 'px-2 py-1 rounded-full text-xs font-medium';
    
    if (type === 'payment') {
      switch (status) {
        case 'paid': return <span className={`${baseClasses} bg-green-100 text-green-800`}>Paid</span>;
        case 'pending': return <span className={`${baseClasses} bg-yellow-100 text-yellow-800`}>Pending</span>;
        case 'cancelled': return <span className={`${baseClasses} bg-red-100 text-red-800`}>Cancelled</span>;
        default: return <span className={`${baseClasses} bg-gray-100 text-gray-800`}>Unknown</span>;
      }
    } else {
      switch (status) {
        case 'processing': return <span className={`${baseClasses} bg-blue-100 text-blue-800`}>Processing</span>;
        case 'completed': return <span className={`${baseClasses} bg-green-100 text-green-800`}>Completed</span>;
        case 'delivered': return <span className={`${baseClasses} bg-purple-100 text-purple-800`}>Delivered</span>;
        case 'cancelled': return <span className={`${baseClasses} bg-red-100 text-red-800`}>Cancelled</span>;
        default: return <span className={`${baseClasses} bg-gray-100 text-gray-800`}>Unknown</span>;
      }
    }
  };

  const handleUpdateStatus = (orderId, newStatus) => {
    setOrders(orders.map(order => 
      order.orderId === orderId 
        ? { ...order, orderStatus: newStatus } 
        : order
    ));
  };

  if (loading) return <div className="flex justify-center items-center h-64">Loading orders...</div>;
  if (error) return <div className="text-red-500 p-4">Error: {error}</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold">Order Management</h1>
              <p className="text-blue-100">View and manage guest orders</p>
            </div>
            <div className="mt-4 md:mt-0">
              <button 
                className="px-4 py-2 bg-white text-blue-600 rounded-md hover:bg-blue-50"
                onClick={() => setIsModalOpen(true)}
              >
                Create New Order
              </button>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-sm font-medium">Filter by:</span>
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1 rounded-full text-sm ${filter === 'all' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            >
              All Orders
            </button>
            <button
              onClick={() => setFilter('payment')}
              className={`px-3 py-1 rounded-full text-sm ${filter === 'payment' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            >
              Pending Payment
            </button>
            <button
              onClick={() => setFilter('processing')}
              className={`px-3 py-1 rounded-full text-sm ${filter === 'processing' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            >
              Processing
            </button>
            <button
              onClick={() => setFilter('completed')}
              className={`px-3 py-1 rounded-full text-sm ${filter === 'completed' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            >
              Completed
            </button>
            <button
              onClick={() => setFilter('delivered')}
              className={`px-3 py-1 rounded-full text-sm ${filter === 'delivered' ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            >
              Delivered
            </button>
          </div>
        </div>

        {/* Orders Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Guest ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ordered Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => (
                  <tr key={order.orderId} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {order.orderId}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.guestId}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.orderItem.length} items
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      ${(order.totalAmount - order.discount).toFixed(2)}
                      {order.discount > 0 && (
                        <span className="ml-1 text-xs text-green-600">(-${order.discount.toFixed(2)})</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {getStatusBadge(order.paymentStatus, 'payment')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {getStatusBadge(order.orderStatus, 'order')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(order.orderedDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button 
                        onClick={() => setSelectedOrder(order)}
                        className="text-blue-600 hover:text-blue-900 mr-3"
                      >
                        View
                      </button>
                      <button className="text-gray-600 hover:text-gray-900">
                        Edit
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="px-6 py-4 text-center text-sm text-gray-500">
                    No orders found matching your criteria
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Order Detail */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold text-gray-800">Order Details</h2>
                  <p className="text-gray-600">{selectedOrder.orderId}</p>
                </div>
                <button 
                  onClick={() => setSelectedOrder(null)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Order Information</h3>
                  <div className="space-y-2">
                    <p><span className="text-gray-600">Guest ID:</span> {selectedOrder.guestId}</p>
                    <p><span className="text-gray-600">Ordered Date:</span> {new Date(selectedOrder.orderedDate).toLocaleString()}</p>
                    {selectedOrder.deliveryDate && (
                      <p><span className="text-gray-600">Delivery Date:</span> {new Date(selectedOrder.deliveryDate).toLocaleString()}</p>
                    )}
                    <p><span className="text-gray-600">Payment Status:</span> {getStatusBadge(selectedOrder.paymentStatus, 'payment')}</p>
                    <p><span className="text-gray-600">Order Status:</span> {getStatusBadge(selectedOrder.orderStatus, 'order')}</p>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Pricing</h3>
                    <div className="space-y-1">
                      <p><span className="text-gray-600">Subtotal:</span> ${selectedOrder.totalAmount.toFixed(2)}</p>
                      {selectedOrder.discount > 0 && (
                        <p><span className="text-gray-600">Discount:</span> -${selectedOrder.discount.toFixed(2)}</p>
                      )}
                      <p className="font-medium"><span className="text-gray-600">Total:</span> ${(selectedOrder.totalAmount - selectedOrder.discount).toFixed(2)}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Order Items ({selectedOrder.orderItem.length})</h3>
                  <div className="border rounded-lg divide-y">
                    {selectedOrder.orderItem.map((item, index) => (
                      <div key={index} className="p-3 flex justify-between">
                        <div>
                          <p className="font-medium">{item.itemName}</p>
                          <p className="text-sm text-gray-600">Product ID: {item.productId}</p>
                        </div>
                        <div className="text-right">
                          <p>${item.price.toFixed(2)}</p>
                          <p className="text-sm text-gray-600">Qty: {item.itemQuantity}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Update Order Status</h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handleUpdateStatus(selectedOrder.orderId, 'processing')}
                    className={`px-3 py-1 rounded-full text-sm ${selectedOrder.orderStatus === 'processing' ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-800 hover:bg-blue-200'}`}
                  >
                    Processing
                  </button>
                  <button
                    onClick={() => handleUpdateStatus(selectedOrder.orderId, 'completed')}
                    className={`px-3 py-1 rounded-full text-sm ${selectedOrder.orderStatus === 'completed' ? 'bg-green-600 text-white' : 'bg-green-100 text-green-800 hover:bg-green-200'}`}
                  >
                    Completed
                  </button>
                  <button
                    onClick={() => handleUpdateStatus(selectedOrder.orderId, 'delivered')}
                    className={`px-3 py-1 rounded-full text-sm ${selectedOrder.orderStatus === 'delivered' ? 'bg-purple-600 text-white' : 'bg-purple-100 text-purple-800 hover:bg-purple-200'}`}
                  >
                    Delivered
                  </button>
                  <button
                    onClick={() => handleUpdateStatus(selectedOrder.orderId, 'cancelled')}
                    className={`px-3 py-1 rounded-full text-sm ${selectedOrder.orderStatus === 'cancelled' ? 'bg-red-600 text-white' : 'bg-red-100 text-red-800 hover:bg-red-200'}`}
                  >
                    Cancelled
                  </button>
                </div>
              </div>

              <div className="mt-6 flex justify-end space-x-3">
                <button
                  onClick={() => setSelectedOrder(null)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Close
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Print Receipt
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Create Order Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-bold text-gray-800">Create New Order</h2>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form className="mt-4 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Guest ID</label>
                  <input 
                    type="text" 
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Order Items</label>
                  <div className="mt-1 space-y-2">
                    <div className="flex space-x-2">
                      <input 
                        type="text" 
                        placeholder="Product ID"
                        className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                      <input 
                        type="number" 
                        placeholder="Qty"
                        className="w-20 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                      <button 
                        type="button"
                        className="px-2 py-1 bg-gray-100 rounded-md hover:bg-gray-200"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Discount ($)</label>
                  <input 
                    type="number" 
                    step="0.01"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    type="button"
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Create Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderPage;