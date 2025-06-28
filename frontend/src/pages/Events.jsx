import React, { useState, useEffect } from 'react';
import { format, parseISO, isSameDay, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isToday } from 'date-fns';
import { motion, AnimatePresence } from 'framer-motion';

const Events = () => {
  const [view, setView] = useState('list'); // 'list', 'calendar', or 'map'
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');
  const [is3D, setIs3D] = useState(false);

  // Enhanced sample event data
  const events = [
    {
      id: 1,
      title: "Quantum Computing Summit",
      date: "2025-07-15",
      time: "09:00 - 17:00",
      location: "Neon Tower, Floor 42",
      description: "Explore the future of quantum algorithms and their real-world applications with leading researchers.",
      category: "conference",
      image: "https://images.pexels.com/photos/33598/cop-policewoman-colleagues-funny.jpg",
      attendees: 342,
      virtual: true,
      tags: ["tech", "future", "AI"]
    },
    {
      id: 2,
      title: "Neuro-Interface Workshop",
      date: "2025-07-20",
      time: "13:00 - 16:00",
      location: "BioHack Labs",
      description: "Hands-on session with next-gen brain-computer interfaces.",
      category: "workshop",
      image: "https://source.unsplash.com/random/600x400/?neuro",
      attendees: 28,
      virtual: false,
      tags: ["biotech", "hands-on"]
    },
    {
      id: 3,
      title: "Mars Colony Expo",
      date: "2025-07-15",
      time: "18:00 - 20:00",
      location: "SpacePort Gallery",
      description: "Preview the technologies enabling our first Martian settlement.",
      category: "exhibition",
      image: "https://images.pexels.com/photos/732894/pexels-photo-732894.jpeg",
      attendees: 156,
      virtual: true,
      tags: ["space", "future"]
    },
    {
      id: 4,
      title: "AI Ethics Council",
      date: "2025-07-25",
      time: "10:00 - 12:00",
      location: "Global Ethics Hub",
      description: "Shaping policies for responsible artificial intelligence development.",
      category: "meeting",
      image: "https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg",
      attendees: 45,
      virtual: false,
      tags: ["AI", "policy"]
    }
  ];

  // Filter events based on search and filter
  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter === 'all' || event.category === filter;
    return matchesSearch && matchesFilter;
  });

  // Calendar generation with date-fns
  const calendarDays = eachDayOfInterval({
    start: startOfMonth(selectedDate),
    end: endOfMonth(selectedDate)
  });

  // sort events by day for calendar view
  const eventsByDay = filteredEvents.reduce((acc, event) => {
    const day = format(parseISO(event.date), 'yyyy-MM-dd');
    if (!acc[day]) acc[day] = [];
    acc[day].push(event);
    return acc;
  }, {});

  // View transitions
  const viewVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 }
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[90%] min-h-screen bg-white text-black p-4 md:p-8">
        {/* Header with advanced controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Future Events Hub
            </h1>
            <p className="text-blue-200 mt-2">Explore tomorrow's experiences today</p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search events..."
                className=" rounded-full py-2 px-4 pr-10 focus:outline-none focus:ring-2 border-1 border-primary focus:ring-cyan-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute right-3 top-2.5 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            
            <select 
              className=" rounded-full py-2 px-4 focus:outline-none focus:ring-2 border-1 border-primary focus:ring-cyan-400"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All Categories</option>
              <option value="conference">Conferences</option>
              <option value="workshop">Workshops</option>
              <option value="exhibition">Exhibitions</option>
              <option value="meeting">Meetings</option>
            </select>
            
            <div className="flex rounded-full p-1 border border-primary">
              <button 
                onClick={() => setView('list')} 
                className={`px-4 py-1 rounded-full transition-all ${view === 'list' ? 'bg-cyan-600 shadow-lg shadow-cyan-500/20' : 'hover:bg-gray-700'}`}
              >
                <span className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  List
                </span>
              </button>
              <button 
                onClick={() => setView('calendar')} 
                className={`px-4 py-1 rounded-full transition-all ${view === 'calendar' ? 'bg-cyan-600 shadow-lg shadow-cyan-500/20' : 'hover:bg-gray-700'}`}
              >
                <span className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Calendar
                </span>
              </button>
              <button 
                onClick={() => setView('map')} 
                className={`px-4 py-1 rounded-full transition-all ${view === 'map' ? 'bg-cyan-600 shadow-lg shadow-cyan-500/20' : 'hover:bg-gray-700'}`}
              >
                <span className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Map
                </span>
              </button>
            </div>
            
            <button 
              onClick={() => setIs3D(!is3D)}
              className={`p-2 rounded-full ${is3D ? 'bg-purple-600' : 'bg-gray-800'} border  hover:bg-gray-700 transition-all`}
              title="Toggle 3D Mode"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={viewVariants}
            transition={{ duration: 0.3 }}
            className="mt-6"
          >
            {view === 'list' && (
              <div className={`grid gap-6 ${is3D ? 'perspective-1000' : ''}`}>
                {filteredEvents.length > 0 ? (
                  filteredEvents.map((event, index) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={` rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-400 transition-all ${is3D ? 'transform hover:-translate-y-2 hover:rotate-x-2' : ''}`}
                      onClick={() => setSelectedEvent(event)}
                    >
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3 h-48 md:h-auto">
                          <img 
                            src={event.image} 
                            alt={event.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6 md:w-2/3">
                          <div className="flex justify-between items-start">
                            <div>
                              <h2 className="text-2xl font-bold">{event.title}</h2>
                              <div className="flex items-center mt-2 text-blue-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {format(parseISO(event.date), 'EEEE, MMMM d')} • {event.time}
                              </div>
                              <div className="flex items-center mt-1 text-blue-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {event.location}
                              </div>
                            </div>
                            <div className="flex flex-col items-end">
                              <span className={`px-3 py-1 rounded-full text-sm font-medium mb-2 ${
                                event.category === 'conference' ? 'bg-purple-600' :
                                event.category === 'workshop' ? 'bg-cyan-600' :
                                event.category === 'exhibition' ? 'bg-green-600' :
                                'bg-orange-600'
                              }`}>
                                {event.category}
                              </span>
                              <div className="flex items-center text-yellow-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                                {event.attendees}+ attending
                              </div>
                            </div>
                          </div>
                          <p className="mt-4 text-gray-300">{event.description}</p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {event.tags.map(tag => (
                              <span key={tag} className="px-2 py-1 bg-gray-700 rounded-full text-xs">
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <div className="text-5xl mb-4">🧐</div>
                    <h3 className="text-xl font-medium">No events found</h3>
                    <p className="text-gray-400 mt-2">Try adjusting your search or filters</p>
                  </div>
                )}
              </div>
            )}

            {view === 'calendar' && (
              <div className={` rounded-xl overflow-hidden border border-gray-700 ${is3D ? 'transform rotate-x-2' : ''}`}>
                <div className="p-4  border-b border-gray-700 flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <h2 className="text-xl font-semibold">
                      {format(selectedDate, 'MMMM yyyy')}
                    </h2>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => setSelectedDate(subMonths(selectedDate, 1))}
                        className="p-2 rounded-full hover:bg-gray-800 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button 
                        onClick={() => setSelectedDate(new Date())}
                        className="px-3 py-1 text-sm bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
                      >
                        Today
                      </button>
                      <button 
                        onClick={() => setSelectedDate(addMonths(selectedDate, 1))}
                        className="p-2 rounded-full hover:bg-gray-800 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-400">
                      {filteredEvents.length} events
                    </span>
                    <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-7 gap-px bg-gray-700">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="bg-gray-800 py-3 text-center font-medium text-gray-400">
                      {day}
                    </div>
                  ))}
                  
                  {Array.from({ length: startOfMonth(selectedDate).getDay() }).map((_, i) => (
                    <div key={`empty-start-${i}`} className="bg-gray-900 min-h-24"></div>
                  ))}
                  
                  {eachDayOfInterval({
                    start: startOfMonth(selectedDate),
                    end: endOfMonth(selectedDate)
                  }).map(day => {
                    const dayKey = format(day, 'yyyy-MM-dd');
                    const dayEvents = eventsByDay[dayKey] || [];
                    const isCurrentDay = isToday(day);
                    
                    return (
                      <div 
                        key={dayKey}
                        className={`min-h-24 p-1.5 border border-gray-700 hover:border-cyan-400 transition-colors relative ${
                          day.getMonth() !== selectedDate.getMonth() ? 'bg-gray-900 text-gray-600' : 'bg-gray-800'
                        }`}
                        onClick={() => {
                          setSelectedDate(day);
                          if (dayEvents.length > 0) {
                            setSelectedEvent(dayEvents[0]);
                          }
                        }}
                      >
                        <div className={`text-right p-1 ${
                          isCurrentDay ? 'bg-cyan-600 rounded-full w-6 h-6 flex items-center justify-center ml-auto font-bold' : ''
                        }`}>
                          {format(day, 'd')}
                        </div>
                        
                        <div className="space-y-1 mt-1">
                          {dayEvents.slice(0, 2).map(event => (
                            <div 
                              key={event.id}
                              className="text-xs p-1.5  rounded truncate hover:bg-cyan-600 hover:text-white cursor-pointer transition-colors"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedEvent(event);
                              }}
                            >
                              <span className="font-medium">{event.time.slice(0, 5)}</span> {event.title}
                            </div>
                          ))}
                          {dayEvents.length > 2 && (
                            <div className="text-xs text-cyan-400 pl-1.5">
                              +{dayEvents.length - 2} more
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {view === 'map' && (
              <div className=" rounded-xl overflow-hidden border border-gray-700 h-96 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-gray-900 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🗺️</div>
                    <h3 className="text-xl font-medium">Interactive Event Map</h3>
                    <p className="text-gray-400 mt-2">Coming soon with 3D venue visualization</p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Event Details Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-opacity-75 flex items-center justify-center p-4 z-50">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className=" rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
            >
              <div className="relative">
                <img 
                  src={selectedEvent.image} 
                  alt={selectedEvent.title} 
                  className="w-full h-64 object-cover"
                />
                <button 
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-4 right-4 bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-3xl font-bold">{selectedEvent.title}</h2>
                    <div className="flex items-center mt-2 text-blue-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {format(parseISO(selectedEvent.date), 'EEEE, MMMM d, yyyy')} • {selectedEvent.time}
                    </div>
                    <div className="flex items-center mt-2 text-blue-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {selectedEvent.location}
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className={`px-4 py-1.5 rounded-full text-sm font-medium mb-3 ${
                      selectedEvent.category === 'conference' ? 'bg-purple-600' :
                      selectedEvent.category === 'workshop' ? 'bg-cyan-600' :
                      selectedEvent.category === 'exhibition' ? 'bg-green-600' :
                      'bg-orange-600'
                    }`}>
                      {selectedEvent.category}
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center text-yellow-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        {selectedEvent.attendees}+ attending
                      </div>
                      {selectedEvent.virtual && (
                        <span className="px-2 py-1 bg-blue-600 rounded-full text-xs">
                          Virtual
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <h3 className="text-xl font-semibold mb-3">About This Event</h3>
                    <p className="text-gray-300">{selectedEvent.description}</p>
                    
                    <div className="mt-6">
                      <h3 className="text-xl font-semibold mb-3">Tags</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedEvent.tags.map(tag => (
                          <span key={tag} className="px-3 py-1.5 rounded-full text-sm">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className=" p-4 rounded-lg">
                      <h3 className="text-lg font-semibold mb-3">Event Details</h3>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div>
                            <p className="font-medium">Date & Time</p>
                            <p className="text-gray-300">
                              {format(parseISO(selectedEvent.date), 'MMMM d, yyyy')}<br />
                              {selectedEvent.time}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <div>
                            <p className="font-medium">Location</p>
                            <p className="text-gray-300">{selectedEvent.location}</p>
                            <button className="text-cyan-400 text-sm mt-1 hover:underline">
                              View on map
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-700 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold mb-3">Register</h3>
                      <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
                        Get Tickets
                      </button>
                      <button className="w-full mt-3 border border-cyan-400 text-cyan-400 py-3 rounded-lg font-medium hover:bg-cyan-400 hover:bg-opacity-10 transition-colors">
                        Add to Calendar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Create Event Panel */}
        <div className="mt-12 bg-gradient-to-r from-gray-800 to-gray-900 p-6 md:p-8 rounded-xl border border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Host Your Future Event</h2>
              <p className="text-gray-400 mt-2">Our venues feature cutting-edge technology for immersive experiences</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Create Event
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-medium hover:bg-cyan-400 hover:bg-opacity-10 transition-colors flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
                Contact Sales
              </button>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg border border-gray-700">
              <div className="text-cyan-400 text-2xl mb-2">XR</div>
              <h3 className="font-medium">Extended Reality</h3>
              <p className="text-gray-400 text-sm mt-1">VR/AR enabled venues</p>
            </div>
            <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg border border-gray-700">
              <div className="text-purple-400 text-2xl mb-2">AI</div>
              <h3 className="font-medium">AI Assistants</h3>
              <p className="text-gray-400 text-sm mt-1">Smart event management</p>
            </div>
            <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg border border-gray-700">
              <div className="text-green-400 text-2xl mb-2">4K</div>
              <h3 className="font-medium">Holographic</h3>
              <p className="text-gray-400 text-sm mt-1">3D projection mapping</p>
            </div>
            <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg border border-gray-700">
              <div className="text-yellow-400 text-2xl mb-2">IoT</div>
              <h3 className="font-medium">Smart Venues</h3>
              <p className="text-gray-400 text-sm mt-1">Connected environments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;