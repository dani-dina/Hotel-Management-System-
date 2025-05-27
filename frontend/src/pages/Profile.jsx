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
        {/* Avatar */}
        <div className="absolute -top-16 left-6 border-4 border-white dark:border-gray-800 rounded-full overflow-hidden">
          <img 
            src={user.avatar} 
            alt={user.name} 
            className="h-32 w-32 object-cover"
          />
        </div>

        {/* Follow Button */}
        <div className="flex justify-end mt-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-200 font-medium">
            Follow
          </button>
        </div>

        {/* User Info */}
        <div className="mt-8">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">{user.name}</h1>
          <p className="text-gray-600 dark:text-gray-300">{user.username}</p>
          
          <p className="mt-3 text-gray-700 dark:text-gray-300">{user.bio}</p>
          
          <div className="flex flex-wrap gap-x-4 mt-3 text-gray-600 dark:text-gray-400">
            {user.location && (
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{user.location}</span>
              </div>
            )}
            
            {user.website && (
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  {user.website}
                </a>
              </div>
            )}
            
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{user.joinDate}</span>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-6 mt-4">
            <div className="flex items-center">
              <span className="font-bold text-gray-800 dark:text-white">{user.stats.posts}</span>
              <span className="ml-1 text-gray-600 dark:text-gray-400">Posts</span>
            </div>
            <div className="flex items-center">

            </div>
            <
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-t border-gray-200 dark:border-gray-700 mt-4">
        <nav className="flex">
          <button
            onClick={() => setActiveTab('posts')}
            className={`px-4 py-3 text-sm font-medium ${activeTab === 'posts' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`}
          >
            Posts
          </button>
        
            Likes
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      
      </div>
    </div>
  );
};

export default ProfilePage;