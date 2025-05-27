import { useState } from 'react';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('posts');
  
  // Mock user data
  const user = {
    name: 'Alex Johnson',
    username: '@alexjohnson',
    bio: 'Frontend Developer | React Enthusiast | Coffee Lover | Building beautiful user interfaces',
    location: 'San Francisco, CA',
    website: 'alexjohnson.dev',
    joinDate: 'Joined June 2018',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    coverPhoto: 'https://images.unsplash.com/photo-1579547945413-497e1b99dac0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    stats: {
      posts: 142,
      followers: 1243,
      following: 532
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      {/* Cover Photo */}
      <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 relative">
        {/* You can replace the gradient with an actual image */}
        {/* <img src={user.coverPhoto} alt="Cover" className="w-full h-full object-cover" /> */}
      </div>

      {/* Profile Info Section */}
      <div className="px-6 py-4 relative">

        <div className="flex justify-end mt-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-200 font-medium">
            Follow
          </button>
        </div>

        {/* User Info */}
        
          </div>
        </div>
      </div>


export default ProfilePage;