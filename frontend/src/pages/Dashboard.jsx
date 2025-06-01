import { useState, useEffect } from 'react';
import { FiUsers, FiCalendar, FiDollarSign, FiHome, FiStar, FiClock } from 'react-icons/fi';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalGuests: 0,
    occupiedRooms: 0,
    revenue: 0,
    reservations: 0,
    averageRating: 0,
    checkInsToday: 0
  });

  const [recentBookings, setRecentBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock data fetch
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate API calls
        setTimeout(() => {
          setStats({
            totalGuests: 142,
            occupiedRooms: 68,
            revenue: 28450,
            reservations: 24,
            averageRating: 4.7,
            checkInsToday: 12
          });

          setRecentBookings([
            {
              id: 'RES-2023-1001',
              guestName: 'Michael Johnson',
              roomType: 'Deluxe Suite',
              checkIn: '2023-06-15',
              checkOut: '2023-06-18',
              status: 'confirmed'
            },
            {
              id: 'RES-2023-1002',
              guestName: 'Sarah Williams',
              roomType: 'Executive Room',
              checkIn: '2023-06-16',
              checkOut: '2023-06-19',
              status: 'checked-in'
            },
            {
              id: 'RES-2023-1003',
              guestName: 'Robert Chen',
              roomType: 'Family Suite',
              checkIn: '2023-06-17',
              checkOut: '2023-06-20',
              status: 'pending'
            }
          ]);

          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'confirmed': return <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Confirmed</span>;
      case 'checked-in': return <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Checked In</span>;
      case 'pending': return <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Pending</span>;
      default: return <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">Unknown</span>;
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Hotel Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6 flex items-center">
          <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
            <FiUsers size={24} />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Guests</p>
            <p className="text-2xl font-bold">{stats.totalGuests}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 flex items-center">
          <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
            <FiHome size={24} />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Occupied Rooms</p>
            <p className="text-2xl font-bold">{stats.occupiedRooms}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 flex items-center">
          <div className="p-3 rounded-full bg-purple-100 text-purple-600 mr-4">
            <FiDollarSign size={24} />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Revenue (USD)</p>
            <p className="text-2xl font-bold">${stats.revenue.toLocaleString()}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 flex items-center">
          <div className="p-3 rounded-full bg-yellow-100 text-yellow-600 mr-4">
            <FiCalendar size={24} />
          </div>
          <div>
            <p className="text-gray-500 text-sm">New Reservations</p>
            <p className="text-2xl font-bold">{stats.reservations}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 flex items-center">
          <div className="p-3 rounded-full bg-red-100 text-red-600 mr-4">
            <FiStar size={24} />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Average Rating</p>
            <p className="text-2xl font-bold">{stats.averageRating}/5</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 flex items-center">
          <div className="p-3 rounded-full bg-indigo-100 text-indigo-600 mr-4">
            <FiClock size={24} />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Check-ins Today</p>
            <p className="text-2xl font-bold">{stats.checkInsToday}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
 
        <div className="lg:col-span-2 bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">Recent Bookings</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Booking ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Guest</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dates</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentBookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{booking.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.guestName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.roomType}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {booking.checkIn} to {booking.checkOut}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {getStatusBadge(booking.status)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">Quick Actions</h2>
          </div>
          <div className="p-6 space-y-4">
            <button className="w-full flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
              <FiCalendar className="mr-2" />
              New Reservation
            </button>
            <button className="w-full flex items-center justify-center px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200">
              <FiUsers className="mr-2" />
              Check-in Guest
            </button>
            <button className="w-full flex items-center justify-center px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-200">
              <FiHome className="mr-2" />
              Room Management
            </button>
            <button className="w-full flex items-center justify-center px-4 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition duration-200">
              <FiDollarSign className="mr-2" />
              Generate Report
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Monthly Occupancy</h2>
        <div className="h-64 bg-gray-100 rounded flex items-center justify-center text-gray-400">
          [Occupancy Chart Placeholder]
        </div>
      </div>
    </div>
  );
};

export default Dashboard;