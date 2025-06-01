import { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const Reservations = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');
  const [selectedReservation, setSelectedReservation] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [view, setView] = useState('month');

  //  API call
  useEffect(() => {
    const fetchReservations = async () => {
      try {
        // Simulate API call
        setTimeout(() => {
          // Mock data
          const mockReservations = [
            {
              id: 'RES-2023-001',
              guestId: 'GUEST-001',
              guestName: 'John Smith',
              roomId: 'ROOM-101',
              roomType: 'Deluxe King',
              checkIn: new Date(2023, 5, 15),
              checkOut: new Date(2023, 5, 18),
              adults: 2,
              children: 1,
              status: 'confirmed',
              specialRequests: 'Early check-in requested',
              totalAmount: 1200,
              paymentStatus: 'deposit-paid',
              createdAt: new Date(2023, 4, 20)
            },
            {
              id: 'RES-2023-002',
              guestId: 'GUEST-002',
              guestName: 'Sarah Johnson',
              roomId: 'ROOM-205',
              roomType: 'Executive Suite',
              checkIn: new Date(2023, 5, 20),
              checkOut: new Date(2023, 5, 25),
              adults: 2,
              children: 0,
              status: 'confirmed',
              specialRequests: 'Anniversary decoration',
              totalAmount: 2500,
              paymentStatus: 'fully-paid',
              createdAt: new Date(2023, 4, 15)
            },
            {
              id: 'RES-2023-003',
              guestId: 'GUEST-003',
              guestName: 'Robert Chen',
              roomId: 'ROOM-312',
              roomType: 'Standard Queen',
              checkIn: new Date(2023, 5, 10),
              checkOut: new Date(2023, 5, 12),
              adults: 1,
              children: 0,
              status: 'checked-out',
              specialRequests: '',
              totalAmount: 600,
              paymentStatus: 'fully-paid',
              createdAt: new Date(2023, 4, 1)
            },
            {
              id: 'RES-2023-004',
              guestId: 'GUEST-004',
              guestName: 'Maria Garcia',
              roomId: 'ROOM-156',
              roomType: 'Family Suite',
              checkIn: new Date(2023, 5, 22),
              checkOut: new Date(2023, 5, 28),
              adults: 2,
              children: 2,
              status: 'pending',
              specialRequests: 'Need crib for toddler',
              totalAmount: 1800,
              paymentStatus: 'pending',
              createdAt: new Date(2023, 5, 1)
            }
          ];
          setReservations(mockReservations);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchReservations();
  }, []);

  const filteredReservations = filter === 'all' 
    ? reservations 
    : reservations.filter(res => 
        filter === 'today' 
          ? moment(res.checkIn).isSame(moment(), 'day') || 
            moment(res.checkOut).isSame(moment(), 'day')
          : res.status === filter
      );

  const getStatusBadge = (status) => {
    const baseClasses = 'px-2 py-1 rounded-full text-xs font-medium';
    
    switch (status) {
      case 'confirmed': return <span className={`${baseClasses} bg-green-100 text-green-800`}>Confirmed</span>;
      case 'pending': return <span className={`${baseClasses} bg-yellow-100 text-yellow-800`}>Pending</span>;
      case 'checked-in': return <span className={`${baseClasses} bg-blue-100 text-blue-800`}>Checked In</span>;
      case 'checked-out': return <span className={`${baseClasses} bg-purple-100 text-purple-800`}>Checked Out</span>;
      case 'cancelled': return <span className={`${baseClasses} bg-red-100 text-red-800`}>Cancelled</span>;
      default: return <span className={`${baseClasses} bg-gray-100 text-gray-800`}>Unknown</span>;
    }
  };

  const getPaymentBadge = (status) => {
    const baseClasses = 'px-2 py-1 rounded-full text-xs font-medium';
    
    switch (status) {
      case 'fully-paid': return <span className={`${baseClasses} bg-green-100 text-green-800`}>Paid</span>;
      case 'deposit-paid': return <span className={`${baseClasses} bg-blue-100 text-blue-800`}>Deposit</span>;
      case 'pending': return <span className={`${baseClasses} bg-yellow-100 text-yellow-800`}>Pending</span>;
      case 'refunded': return <span className={`${baseClasses} bg-purple-100 text-purple-800`}>Refunded</span>;
      default: return <span className={`${baseClasses} bg-gray-100 text-gray-800`}>Unknown</span>;
    }
  };

  const calendarEvents = reservations.map(res => ({
    id: res.id,
    title: `${res.guestName} - ${res.roomType}`,
    start: new Date(res.checkIn),
    end: new Date(res.checkOut),
    status: res.status,
    roomId: res.roomId
  }));

  const eventStyleGetter = (event) => {
    let backgroundColor = '';
    switch (event.status) {
      case 'confirmed': backgroundColor = '#d1fae5'; break;
      case 'pending': backgroundColor = '#fef3c7'; break;
      case 'checked-in': backgroundColor = '#bfdbfe'; break;
      case 'checked-out': backgroundColor = '#e9d5ff'; break;
      case 'cancelled': backgroundColor = '#fecaca'; break;
      default: backgroundColor = '#e5e7eb';
    }
    
    return {
      style: {
        backgroundColor,
        borderRadius: '4px',
        border: '0px',
        color: '#1f2937',
        display: 'block'
      }
    };
  };

  const handleSelectEvent = (event) => {
    const reservation = reservations.find(r => r.id === event.id);
    setSelectedReservation(reservation);
  };

  const handleUpdateStatus = (reservationId, newStatus) => {
    setReservations(reservations.map(res => 
      res.id === reservationId ? { ...res, status: newStatus } : res
    ));
    setSelectedReservation(null);
  };

  if (loading) return <div className="flex justify-center items-center h-64">Loading reservations...</div>;
  if (error) return <div className="text-red-500 p-4">Error: {error}</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold">Reservations Management</h1>
              <p className="text-blue-100">View and manage guest reservations</p>
            </div>
            <div className="mt-4 md:mt-0">
              <button 
                className="px-4 py-2 bg-white text-blue-600 rounded-md hover:bg-blue-50"
                onClick={() => setIsModalOpen(true)}
              >
                Create New Reservation
              </button>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-sm font-medium">View:</span>
            <button
              onClick={() => setView('month')}
              className={`px-3 py-1 rounded-full text-sm ${view === 'month' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            >
              Month
            </button>
            <button
              onClick={() => setView('week')}
              className={`px-3 py-1 rounded-full text-sm ${view === 'week' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            >
              Week
            </button>
            <button
              onClick={() => setView('day')}
              className={`px-3 py-1 rounded-full text-sm ${view === 'day' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            >
              Day
            </button>
            <button
              onClick={() => setView('agenda')}
              className={`px-3 py-1 rounded-full text-sm ${view === 'agenda' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            >
              Agenda
            </button>

            <span className="ml-4 text-sm font-medium">Filter:</span>
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1 rounded-full text-sm ${filter === 'all' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('today')}
              className={`px-3 py-1 rounded-full text-sm ${filter === 'today' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            >
              Today
            </button>
            <button
              onClick={() => setFilter('confirmed')}
              className={`px-3 py-1 rounded-full text-sm ${filter === 'confirmed' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            >
              Confirmed
            </button>
            <button
              onClick={() => setFilter('pending')}
              className={`px-3 py-1 rounded-full text-sm ${filter === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            >
              Pending
            </button>
          </div>
        </div>

        {/* Calendar View */}
        <div className="p-4">
          <div className="h-[600px]">
            <Calendar
              localizer={localizer}
              events={calendarEvents}
              startAccessor="start"
              endAccessor="end"
              defaultView={view}
              views={['month', 'week', 'day', 'agenda']}
              onView={setView}
              onSelectEvent={handleSelectEvent}
              eventPropGetter={eventStyleGetter}
            />
          </div>
        </div>

        {/* Reservations List */}
        <div className="p-4 border-t border-gray-200">
          <h2 className="text-lg font-semibold mb-4">Reservations List</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reservation ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Guest</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dates</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredReservations.length > 0 ? (
                  filteredReservations.map((reservation) => (
                    <tr key={reservation.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {reservation.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {reservation.guestName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {reservation.roomType} ({reservation.roomId})
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {moment(reservation.checkIn).format('MMM D')} - {moment(reservation.checkOut).format('MMM D, YYYY')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {getStatusBadge(reservation.status)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {getPaymentBadge(reservation.paymentStatus)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ${reservation.totalAmount.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button 
                          onClick={() => setSelectedReservation(reservation)}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="px-6 py-4 text-center text-sm text-gray-500">
                      No reservations found matching your criteria
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Reservation Detail Modal */}
      {selectedReservation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold text-gray-800">Reservation Details</h2>
                  <p className="text-gray-600">{selectedReservation.id}</p>
                </div>
                <button 
                  onClick={() => setSelectedReservation(null)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Guest Information</h3>
                  <div className="space-y-2">
                    <p><span className="text-gray-600">Guest ID:</span> {selectedReservation.guestId}</p>
                    <p><span className="text-gray-600">Guest Name:</span> {selectedReservation.guestName}</p>
                    <p><span className="text-gray-600">Adults:</span> {selectedReservation.adults}</p>
                    <p><span className="text-gray-600">Children:</span> {selectedReservation.children}</p>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">Reservation Dates</h3>
                  <div className="space-y-2">
                    <p><span className="text-gray-600">Check-in:</span> {moment(selectedReservation.checkIn).format('ddd, MMM D, YYYY')}</p>
                    <p><span className="text-gray-600">Check-out:</span> {moment(selectedReservation.checkOut).format('ddd, MMM D, YYYY')}</p>
                    <p><span className="text-gray-600">Nights:</span> {moment(selectedReservation.checkOut).diff(moment(selectedReservation.checkIn), 'days')}</p>
                    <p><span className="text-gray-600">Created:</span> {moment(selectedReservation.createdAt).format('MMM D, YYYY')}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Room Information</h3>
                  <div className="space-y-2">
                    <p><span className="text-gray-600">Room ID:</span> {selectedReservation.roomId}</p>
                    <p><span className="text-gray-600">Room Type:</span> {selectedReservation.roomType}</p>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">Payment Information</h3>
                  <div className="space-y-2">
                    <p><span className="text-gray-600">Status:</span> {getPaymentBadge(selectedReservation.paymentStatus)}</p>
                    <p><span className="text-gray-600">Total Amount:</span> ${selectedReservation.totalAmount.toFixed(2)}</p>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">Special Requests</h3>
                  <p className="text-gray-800">
                    {selectedReservation.specialRequests || 'None'}
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Update Reservation Status</h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handleUpdateStatus(selectedReservation.id, 'confirmed')}
                    className={`px-3 py-1 rounded-full text-sm ${selectedReservation.status === 'confirmed' ? 'bg-green-600 text-white' : 'bg-green-100 text-green-800 hover:bg-green-200'}`}
                  >
                    Confirm
                  </button>
                  <button
                    onClick={() => handleUpdateStatus(selectedReservation.id, 'checked-in')}
                    className={`px-3 py-1 rounded-full text-sm ${selectedReservation.status === 'checked-in' ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-800 hover:bg-blue-200'}`}
                  >
                    Check In
                  </button>
                  <button
                    onClick={() => handleUpdateStatus(selectedReservation.id, 'checked-out')}
                    className={`px-3 py-1 rounded-full text-sm ${selectedReservation.status === 'checked-out' ? 'bg-purple-600 text-white' : 'bg-purple-100 text-purple-800 hover:bg-purple-200'}`}
                  >
                    Check Out
                  </button>
                  <button
                    onClick={() => handleUpdateStatus(selectedReservation.id, 'cancelled')}
                    className={`px-3 py-1 rounded-full text-sm ${selectedReservation.status === 'cancelled' ? 'bg-red-600 text-white' : 'bg-red-100 text-red-800 hover:bg-red-200'}`}
                  >
                    Cancel
                  </button>
                </div>
              </div>

              <div className="mt-6 flex justify-end space-x-3">
                <button
                  onClick={() => setSelectedReservation(null)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Close
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Print Confirmation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Create Reservation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-bold text-gray-800">New Reservation</h2>
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Check-in Date</label>
                    <input 
                      type="date" 
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Check-out Date</label>
                    <input 
                      type="date" 
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Adults</label>
                    <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                      {[1, 2, 3, 4].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Children</label>
                    <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                      {[0, 1, 2, 3].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Room Type</label>
                  <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                    <option value="standard">Standard Queen</option>
                    <option value="deluxe">Deluxe King</option>
                    <option value="executive">Executive Suite</option>
                    <option value="family">Family Suite</option>
                    <option value="presidential">Presidential Suite</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Special Requests</label>
                  <textarea 
                    rows="3"
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
                    Create Reservation
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

export default Reservations;