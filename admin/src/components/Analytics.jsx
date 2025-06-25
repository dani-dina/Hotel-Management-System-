import { useState } from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const AnalyticsPage = () => {
  const [timeRange, setTimeRange] = useState('monthly');
  const [activeTab, setActiveTab] = useState('overview');

  // Sample data - replace with your actual API data
  const occupancyData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Occupancy Rate (%)',
        data: [65, 59, 80, 81, 56, 72, 90, 85, 78, 82, 68, 75],
        borderColor: 'rgb(79, 70, 229)',
        backgroundColor: 'rgba(79, 70, 229, 0.2)',
        tension: 0.1,
        fill: true
      }
    ]
  };

  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Revenue ($)',
        data: [12500, 19000, 30000, 28000, 21000, 32000, 41000, 38000, 35000, 40000, 29000, 36000],
        backgroundColor: '#0AADD2'
      }
    ]
  };

  const roomTypeData = {
    labels: ['Standard', 'Deluxe', 'Suite', 'Executive', 'Presidential'],
    datasets: [
      {
        label: 'Bookings by Room Type',
        data: [120, 90, 60, 45, 25],
        backgroundColor: [
          '#0AADD2',
          'rgba(99, 102, 241, 0.7)',
          'rgba(129, 140, 248, 0.7)',
          'rgba(165, 180, 252, 0.7)',
          'rgba(199, 210, 254, 0.7)'
        ],
        borderColor: [
          '#0AADD2',
          'rgba(99, 102, 241, 1)',
          'rgba(129, 140, 248, 1)',
          'rgba(165, 180, 252, 1)',
          'rgba(199, 210, 254, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

  const kpiCards = [
    { title: 'Occupancy Rate', value: '78%', change: '+5%', trend: 'up' },
    { title: 'Total Revenue', value: '$356,800', change: '+12%', trend: 'up' },
    { title: 'Average Daily Rate', value: '$189', change: '+3%', trend: 'up' },
    { title: 'RevPAR', value: '$147', change: '-2%', trend: 'down' }
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Hotel Analytics Dashboard</h1>
        <div className="flex space-x-2">
          <button
            onClick={() => setTimeRange('daily')}
            className={`px-3 py-1 rounded-md ${timeRange === 'daily' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Daily
          </button>
          <button
            onClick={() => setTimeRange('weekly')}
            className={`px-3 py-1 rounded-md ${timeRange === 'weekly' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Weekly
          </button>
          <button
            onClick={() => setTimeRange('monthly')}
            className={`px-3 py-1 rounded-md ${timeRange === 'monthly' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Monthly
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          {['overview', 'occupancy', 'revenue', 'guests'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === tab ? 'border-lightPrimary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {kpiCards.map((card, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-sm font-medium text-gray-500">{card.title}</h3>
            <div className="mt-2 flex items-baseline">
              <p className="text-2xl font-semibold text-gray-900">{card.value}</p>
              <span className={`ml-2 flex items-center text-sm font-medium ${card.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                {card.trend === 'up' ? (
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
                {card.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Occupancy Trend</h2>
          <div className="h-80">
            <Line
              data={occupancyData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'top'
                  }
                }
              }}
            />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Revenue Overview</h2>
          <div className="h-80">
            <Bar
              data={revenueData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'top'
                  }
                }
              }}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm lg:col-span-2">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Booking Sources</h2>
          <div className="h-80">
            <Line
              data={{
                labels: ['Direct', 'OTA', 'Travel Agent', 'Corporate', 'Other'],
                datasets: [
                  {
                    label: 'Bookings',
                    data: [120, 90, 60, 45, 25],
                    borderColor: '#0AADD2',
                    backgroundColor: 'rgba(79, 70, 229, 0.2)',
                    tension: 0.1
                  }
                ]
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'top'
                  }
                }
              }}
            />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Room Type Distribution</h2>
          <div className="h-80">
            <Pie
              data={roomTypeData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'right'
                  }
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;