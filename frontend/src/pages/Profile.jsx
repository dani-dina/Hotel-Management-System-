import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FiUser, FiMail, FiPhone, FiLock, FiCalendar, FiClock, FiEdit2, FiSettings, FiActivity, FiShield, FiKey } from 'react-icons/fi';
import { motion } from 'framer-motion';

const ProfilePage = () => {
  const { accountId } = useParams();
  const [activeTab, setActiveTab] = useState('profile');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setTimeout(() => {
          const mockUser = {
            accountId: accountId,
            email: 'guest@luxuryhaven.com',
            phoneNumber: '+1 (555) 123-4567',
            role: 'Guest',
            isActive: true,
            createdAt: new Date('2023-01-15'),
            lastLogin: new Date(),
            linkedProfile: {
              name: 'Alex Johnson',
              nationality: 'United States',
              passportNumber: 'US12345678',
              preferences: ['Non-smoking', 'King bed', 'High floor', 'Ocean view'],
              loyaltyPoints: 2450,
              bookings: [
                { id: 'BK-2023-0456', date: '2023-05-15', room: 'Deluxe Suite', status: 'Completed' },
                { id: 'BK-2023-0789', date: '2023-07-22', room: 'Executive Suite', status: 'Upcoming' }
              ],
              __t: 'Guest'
            }
          };
          setUser(mockUser);
          setLoading(false);
        }, 800);
      } catch (err) {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [accountId]);

  if (loading) return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-gray-200 h-12 w-12"></div>
        <div className="flex-1 space-y-4 py-1">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  );

  if (!user) return <div className="text-center py-20">User not found</div>;

  const renderRoleBadge = () => {
    const baseClasses = "px-3 py-1 rounded-full text-xs font-semibold flex items-center";
    
    switch(user.role) {
      case 'Admin':
        return (
          <span className={`${baseClasses} bg-purple-100 text-purple-800`}>
            <FiShield className="mr-1" /> Administrator
          </span>
        );
      case 'Employee':
        return (
          <span className={`${baseClasses} bg-green-100 text-green-800`}>
            <FiUser className="mr-1" /> Employee
          </span>
        );
      default:
        return (
          <span className={`${baseClasses} bg-blue-100 text-blue-800`}>
            <FiUser className="mr-1" /> Guest
          </span>
        );
    }
  };

  const renderProfileTab = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-gray-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center">
          <FiUser className="mr-2 text-blue-500" /> Basic Information
        </h3>
        <div className="space-y-5">
          <div className="flex items-start">
            <div className="w-1/3 text-sm text-gray-500">Account ID</div>
            <div className="w-2/3 font-medium">{user.accountId}</div>
          </div>
          <div className="flex items-start">
            <div className="w-1/3 text-sm text-gray-500">Email</div>
            <div className="w-2/3 font-medium">{user.email}</div>
          </div>
          <div className="flex items-start">
            <div className="w-1/3 text-sm text-gray-500">Phone</div>
            <div className="w-2/3 font-medium">{user.phoneNumber}</div>
          </div>
          <div className="flex items-start">
            <div className="w-1/3 text-sm text-gray-500">Status</div>
            <div className="w-2/3">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${user.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {user.isActive ? 'Active' : 'Inactive'}
              </span>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-1/3 text-sm text-gray-500">Created</div>
            <div className="w-2/3 text-gray-700">{new Date(user.createdAt).toLocaleDateString()}</div>
          </div>
          <div className="flex items-start">
            <div className="w-1/3 text-sm text-gray-500">Last Login</div>
            <div className="w-2/3 text-gray-700">
              {user.lastLogin ? new Date(user.lastLogin).toLocaleString() : 'Never'}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center">
          {user.role === 'Guest' ? (
            <>
              <FiUser className="mr-2 text-blue-500" /> Guest Details
            </>
          ) : user.role === 'Employee' ? (
            <>
              <FiUser className="mr-2 text-green-500" /> Employee Details
            </>
          ) : (
            <>
              <FiShield className="mr-2 text-purple-500" /> Admin Details
            </>
          )}
        </h3>

        {user.role === 'Guest' && (
          <div className="space-y-5">
            <div className="flex items-start">
              <div className="w-1/3 text-sm text-gray-500">Full Name</div>
              <div className="w-2/3 font-medium">{user.linkedProfile.name}</div>
            </div>
            <div className="flex items-start">
              <div className="w-1/3 text-sm text-gray-500">Nationality</div>
              <div className="w-2/3">{user.linkedProfile.nationality}</div>
            </div>
            <div className="flex items-start">
              <div className="w-1/3 text-sm text-gray-500">Passport</div>
              <div className="w-2/3 font-mono">{user.linkedProfile.passportNumber}</div>
            </div>
            <div className="flex items-start">
              <div className="w-1/3 text-sm text-gray-500">Loyalty Points</div>
              <div className="w-2/3">
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full" 
                      style={{ width: `${Math.min(user.linkedProfile.loyaltyPoints / 50, 100)}%` }}
                    ></div>
                  </div>
                  <span className="text-blue-600 font-medium">{user.linkedProfile.loyaltyPoints}</span>
                </div>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-1/3 text-sm text-gray-500">Preferences</div>
              <div className="w-2/3">
                <div className="flex flex-wrap gap-2">
                  {user.linkedProfile.preferences.map((pref, i) => (
                    <span key={i} className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                      {pref}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {user.role === 'Employee' && (
          <div className="space-y-5">
            <div className="flex items-start">
              <div className="w-1/3 text-sm text-gray-500">Employee ID</div>
              <div className="w-2/3 font-medium">EMP-{user.accountId.slice(-4)}</div>
            </div>
            <div className="flex items-start">
              <div className="w-1/3 text-sm text-gray-500">Department</div>
              <div className="w-2/3">{user.linkedProfile.department}</div>
            </div>
            <div className="flex items-start">
              <div className="w-1/3 text-sm text-gray-500">Position</div>
              <div className="w-2/3 font-medium">{user.linkedProfile.position}</div>
            </div>
            <div className="flex items-start">
              <div className="w-1/3 text-sm text-gray-500">Shift</div>
              <div className="w-2/3">
                <span className="px-2.5 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                  {user.linkedProfile.shift}
                </span>
              </div>
            </div>
          </div>
        )}

        {user.role === 'Admin' && (
          <div className="space-y-5">
            <div className="flex items-start">
              <div className="w-1/3 text-sm text-gray-500">Admin ID</div>
              <div className="w-2/3 font-medium">ADM-{user.accountId.slice(-4)}</div>
            </div>
            <div className="flex items-start">
              <div className="w-1/3 text-sm text-gray-500">Access Level</div>
              <div className="w-2/3">
                <span className="px-2.5 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                  {user.linkedProfile.accessLevel}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderActivityTab = () => (
    <div className="bg-gray-50 rounded-xl p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center">
        <FiActivity className="mr-2 text-blue-500" /> Recent Activity
      </h3>
      
      {user.role === 'Guest' && user.linkedProfile.bookings?.length > 0 ? (
        <div className="space-y-4">
          {user.linkedProfile.bookings.map((booking, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-4 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-gray-800">{booking.room}</h4>
                  <p className="text-sm text-gray-500 mt-1">Booking #{booking.id}</p>
                </div>
                <div className="text-right">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                    booking.status === 'Completed' ? 'bg-green-100 text-green-800' :
                    booking.status === 'Upcoming' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {booking.status}
                  </span>
                  <p className="text-sm text-gray-500 mt-1">{booking.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-10 text-gray-500">
          No recent activity to display
        </div>
      )}
    </div>
  );

  const renderSettingsTab = () => (
    <div className="bg-gray-50 rounded-xl p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center">
        <FiSettings className="mr-2 text-blue-500" /> Account Settings
      </h3>
      
      <div className="space-y-6">
        <div className="border border-gray-200 rounded-lg p-5">
          <h4 className="font-medium text-gray-800 mb-4 flex items-center">
            <FiKey className="mr-2 text-blue-500" /> Change Password
          </h4>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
              <div className="relative">
                <input
                  type="password"
                  className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter current password"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
              <input
                type="password"
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter new password"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
              <input
                type="password"
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Confirm new password"
              />
            </div>
            <div className="pt-2">
              <button
                type="button"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Update Password
              </button>
            </div>
          </form>
        </div>

        {user.role === 'Guest' && (
          <div className="border border-gray-200 rounded-lg p-5">
            <h4 className="font-medium text-gray-800 mb-4">Notification Preferences</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="promo-notifications"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="promo-notifications" className="ml-2 block text-sm text-gray-700">
                  Promotional Offers
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="booking-notifications"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  defaultChecked
                />
                <label htmlFor="booking-notifications" className="ml-2 block text-sm text-gray-700">
                  Booking Confirmations
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="loyalty-notifications"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  defaultChecked
                />
                <label htmlFor="loyalty-notifications" className="ml-2 block text-sm text-gray-700">
                  Loyalty Program Updates
                </label>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-sm overflow-hidden"
      >
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 md:p-8 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center">
              <div className="relative">
                <div className="h-20 w-20 rounded-full bg-white bg-opacity-20 backdrop-blur-sm flex items-center justify-center text-white text-2xl font-bold border-2 border-white border-opacity-30">
                  {user.linkedProfile?.name?.charAt(0) || user.email.charAt(0).toUpperCase()}
                </div>
                <span className={`absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white ${user.isActive ? 'bg-green-400' : 'bg-red-400'}`}></span>
              </div>
              <div className="ml-4">
                <h1 className="text-2xl font-bold">
                  {user.role === 'Guest' ? user.linkedProfile?.name : 
                   user.role === 'Employee' ? user.linkedProfile?.position : 
                   'Administrator'}
                </h1>
                <div className="flex items-center mt-1">
                  {renderRoleBadge()}
                  <span className="ml-3 text-blue-100 text-sm flex items-center">
                    <FiMail className="mr-1" /> {user.email}
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-3">
              <button className="px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-lg flex items-center transition-all">
                <FiEdit2 className="mr-2" /> Edit Profile
              </button>
              {user.role === 'Admin' && (
                <button className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg flex items-center transition-all">
                  Admin Dashboard
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab('profile')}
              className={`px-6 py-4 text-sm font-medium flex items-center ${activeTab === 'profile' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              <FiUser className={`mr-2 ${activeTab === 'profile' ? 'text-blue-600' : 'text-gray-400'}`} />
              Profile
            </button>
            <button
              onClick={() => setActiveTab('activity')}
              className={`px-6 py-4 text-sm font-medium flex items-center ${activeTab === 'activity' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              <FiActivity className={`mr-2 ${activeTab === 'activity' ? 'text-blue-600' : 'text-gray-400'}`} />
              Activity
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`px-6 py-4 text-sm font-medium flex items-center ${activeTab === 'settings' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              <FiSettings className={`mr-2 ${activeTab === 'settings' ? 'text-blue-600' : 'text-gray-400'}`} />
              Settings
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        <div className="p-6 md:p-8">
          {activeTab === 'profile' && renderProfileTab()}
          {activeTab === 'activity' && renderActivityTab()}
          {activeTab === 'settings' && renderSettingsTab()}
        </div>
      </motion.div>
    </div>
  );
};

export default ProfilePage;