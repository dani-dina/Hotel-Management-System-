import React, { useState } from 'react';

const TestimonialPage = () => {
  const [activeTab, setActiveTab] = useState('all');

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Food Blogger',
      content: 'The best Italian food I\'ve had outside of Italy! The pasta is cooked to perfection and the sauces are incredibly flavorful.',
      rating: 5,
      date: 'May 15, 2023',
      category: 'food'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Local Guide',
      content: 'Excellent service and cozy atmosphere. The staff went above and beyond to make our anniversary dinner special.',
      rating: 4,
      date: 'April 2, 2023',
      category: 'service'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'First-time Visitor',
      content: 'The pizza crust was perfectly crispy and the ingredients were so fresh. Will definitely be coming back!',
      rating: 5,
      date: 'March 28, 2023',
      category: 'food'
    },
    {
      id: 4,
      name: 'David Wilson',
      role: 'Regular Customer',
      content: 'Consistently great quality. I appreciate that they accommodate my dietary restrictions without compromising on taste.',
      rating: 5,
      date: 'February 14, 2023',
      category: 'service'
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'Event Planner',
      content: 'Hosted a business lunch here and everyone was impressed. The private dining area was perfect for our group.',
      rating: 4,
      date: 'January 5, 2023',
      category: 'experience'
    },
    {
      id: 6,
      name: 'James Park',
      role: 'Food Critic',
      content: 'Innovative dishes that still respect traditional flavors. The wine pairing suggestions were spot on.',
      rating: 5,
      date: 'December 20, 2022',
      category: 'food'
    },
  ];

  const categories = [
    { id: 'all', name: 'All Testimonials' },
    { id: 'food', name: 'Food Quality' },
    { id: 'service', name: 'Service' },
    { id: 'experience', name: 'Dining Experience' },
  ];

  const filteredTestimonials = activeTab === 'all' 
    ? testimonials 
    : testimonials.filter(testimonial => testimonial.category === activeTab);

  const renderStars = (rating) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Customers Say
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>
        <div className="flex justify-center mb-12">
          <nav className="flex space-x-4" aria-label="Tabs">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-3 py-2 text-sm font-medium rounded-md ${
                  activeTab === category.id
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </nav>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <blockquote className="mb-4">
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </blockquote>
              <p className="text-gray-400 text-sm">{testimonial.date}</p>
            </div>
          ))}
        </div>

      
        {filteredTestimonials.length === 0 && (
          <div className="text-center py-12">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">No testimonials found</h3>
            <p className="mt-1 text-gray-500">There are no testimonials in this category yet.</p>
          </div>
        )}

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Want to share your experience?</h2>
          <p className="mt-4 text-lg text-gray-600">
            We'd love to hear about your dining experience with us.
          </p>
          <div className="mt-6">
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
              Leave a Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialPage;