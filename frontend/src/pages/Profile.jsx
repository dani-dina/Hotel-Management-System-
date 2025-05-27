import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProfilePage = () => {
  const { accountId } = useParams();
  const [activeTab, setActiveTab] = useState('profile');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mock data fetch - replace with actual API call
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Simulate API call
        setTimeout(() => {
          // Mock data based on your schema
          const mockUser = {
            accountId: accountId,
            email: 'user@example.com',
            phoneNumber: '+1234567890',
            role: 'Guest', // Can be 'Guest', 'Admin', or 'Employee'
            isActive: true,
            createdAt: new Date('2023-01-15'),
            lastLogin: new Date(),
            linkedProfile: {
              // Different profile data based on role
              ...(Math.random() > 0.5 ? { // Randomly choose between Guest/Admin/Employee for demo
                name: 'John Doe',
                nationality: 'United States',
                passportNumber: 'AB1234567',
                preferences: ['Non-smoking', 'King bed', 'High floor'],
                loyaltyPoints: 1250,
                bookings: [],
                __t: 'Guest'
              } : Math.random() > 0.5 ? {
                employeeId: 'EMP-2023-001',
                department: 'Front Desk',
                position: 'Manager',
                shift: 'Day',
                permissions: ['check-in', 'check-out', 'room-assignment'],
                __t: 'Employee'
              } : {
                adminId: 'ADM-2021-001',
                accessLevel: 'Super Admin',
                lastAccess: new Date(),
                managedProperties: ['Main Hotel', 'Beach Resort'],
                __t: 'Admin'
              })
            }
          };
          setUser(mockUser);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUserData();
  }, [accountId]);

  if (loading) return <div className="flex justify-center items-center h-64">Loading...</div>;
  if (error) return <div className="text-red-500 p-4">Error: {error}</div>;
  if (!user) return <div className="p-4">User not found</div>;

  const renderRoleSpecificContent = () => {
    switch (user.role) {
      case 'Guest':
        return (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Guest Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Nationality</p>
                <p className="text-gray-800 dark:text-white">{user.linkedProfile.nationality || 'Not specified'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Passport Number</p>
                <p className="text-gray-800 dark:text-white">{user.linkedProfile.passportNumber || 'Not provided'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Loyalty Points</p>
                <p className="text-gray-800 dark:text-white">{user.linkedProfile.loyaltyPoints || 0}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Preferences</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {user.linkedProfile.preferences?.length > 0 ? (
                    user.linkedProfile.preferences.map((pref, i) => (
                      <span key={i} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {pref}
                      </span>
                    ))
                  ) : (
                    <p className="text-gray-500">No preferences specified</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      case 'Employee':
        return (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Employee Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Employee ID</p>
                <p className="text-gray-800 dark:text-white">{user.linkedProfile.employeeId}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Department</p>
                <p className="text-gray-800 dark:text-white">{user.linkedProfile.department}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Position</p>
                <p className="text-gray-800 dark:text-white">{user.linkedProfile.position}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Shift</p>
                <p className="text-gray-800 dark:text-white">{user.linkedProfile.shift}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm text-gray-500 dark:text-gray-400">Permissions</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {user.linkedProfile.permissions.map((perm, i) => (
                    <span key={i} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                      {perm}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case 'Admin':
        return (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Administrator Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Admin ID</p>
                <p className="text-gray-800 dark:text-white">{user.linkedProfile.adminId}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Access Level</p>
                <p className="text-gray-800 dark:text-white">{user.linkedProfile.accessLevel}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Last Access</p>
                <p className="text-gray-800 dark:text-white">
                  {new Date(user.linkedProfile.lastAccess).toLocaleString()}
                </p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm text-gray-500 dark:text-gray-400">Managed Properties</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {user.linkedProfile.managedProperties.map((prop, i) => (
                    <span key={i} className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                      {prop}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Account Information</h3>
                <div className="mt-4 space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Account ID</p>
                    <p className="text-gray-800 dark:text-white">{user.accountId}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <p className="text-gray-800 dark:text-white">{user.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone Number</p>
                    <p className="text-gray-800 dark:text-white">{user.phoneNumber}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Account Status</p>
                    <p className="flex items-center">
                      <span className={`inline-block w-2 h-2 rounded-full mr-2 ${user.isActive ? 'bg-green-500' : 'bg-red-500'}`}></span>
                      <span className="text-gray-800 dark:text-white">{user.isActive ? 'Active' : 'Inactive'}</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Created At</p>
                    <p className="text-gray-800 dark:text-white">{new Date(user.createdAt).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Last Login</p>
                    <p className="text-gray-800 dark:text-white">
                      {user.lastLogin ? new Date(user.lastLogin).toLocaleString() : 'Never logged in'}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Role: {user.role}</h3>
                {renderRoleSpecificContent()}
              </div>
            </div>
          </div>
        );
      case 'activity':
        return (
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Recent Activity</h3>
            <div className="mt-4 space-y-4">
              {user.role === 'Guest' && user.linkedProfile.bookings?.length > 0 ? (
                user.linkedProfile.bookings.map((booking, i) => (
                  <div key={i} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    Booking #{i+1}
                  </div>
                ))
              ) : (
                <p className="text-gray-500 dark:text-gray-400">No recent activity to display</p>
              )}
            </div>
          </div>
        );
      case 'settings':
        return (
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Account Settings</h3>
            <div className="mt-4 space-y-4">
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h4 className="font-medium text-gray-800 dark:text-white">Change Password</h4>
                <form className="mt-2 space-y-3">
                  <div>
                    <label className="block text-sm text-gray-500 dark:text-gray-400">Current Password</label>
                    <input 
                      type="password" 
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-500 dark:text-gray-400">New Password</label>
                    <input 
                      type="password" 
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-500 dark:text-gray-400">Confirm New Password</label>
                    <input 
                      type="password" 
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                  <button 
                    type="button" 
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Update Password
                  </button>
                </form>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center">
              <div className="relative">
                <div className="h-20 w-20 rounded-full bg-white flex items-center justify-center text-blue-600 text-2xl font-bold">
                  {user.email.charAt(0).toUpperCase()}
                </div>
                <span className={`absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white ${user.isActive ? 'bg-green-500' : 'bg-red-500'}`}></span>
              </div>
              <div className="ml-4">
                <h1 className="text-2xl font-bold">
                  {user.role === 'Guest' ? user.linkedProfile?.name || 'Guest User' : 
                   user.role === 'Employee' ? user.linkedProfile?.position || 'Employee' : 
                   'Administrator'}
                </h1>
                <p className="text-blue-100">{user.role} Account</p>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <button className="px-4 py-2 bg-white text-blue-600 rounded-md hover:bg-blue-50 mr-2">
                Edit Profile
              </button>
              {user.role === 'Admin' && (
                <button className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800">
                  Admin Dashboard
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab('profile')}
              className={`px-6 py-4 text-sm font-medium ${activeTab === 'profile' ? 'text-blue-600 border-b-2 border-blue-600 dark:text-blue-400 dark:border-blue-400' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`}
            >
              Profile
            </button>
            <button
              onClick={() => setActiveTab('activity')}
              className={`px-6 py-4 text-sm font-medium ${activeTab === 'activity' ? 'text-blue-600 border-b-2 border-blue-600 dark:text-blue-400 dark:border-blue-400' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`}
            >
              Activity
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`px-6 py-4 text-sm font-medium ${activeTab === 'settings' ? 'text-blue-600 border-b-2 border-blue-600 dark:text-blue-400 dark:border-blue-400' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`}
            >
              Settings
            </button>
          </nav>
        </div>

        {/* Content */}
        <div className="p-6">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;