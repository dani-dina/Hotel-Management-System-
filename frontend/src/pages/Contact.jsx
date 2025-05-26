import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send `formData` to your backend here
    console.log('Form submitted:', formData);
    alert("Message sent successfully!");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-white rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">Contact Us</h1>
      <p className="mb-6 text-gray-600">We’d love to hear from you! Please fill out the form below.</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1 font-medium text-gray-700" htmlFor="name">Full Name</label>
          <input
            name="name"
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700" htmlFor="email">Email Address</label>
          <input
            name="email"
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700" htmlFor="subject">Subject</label>
          <input
            name="subject"
            id="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Subject of your message"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700" htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Write your message here..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Send Message
        </button>
      </form>

      <div className="mt-10 border-t pt-6 text-sm text-gray-500">
        <p><strong>Email:</strong> support@yourdomain.com</p>
        <p><strong>Phone:</strong> +1 (555) 123-4567</p>
        <p><strong>Address:</strong> 123 Main Street, Suite 100, YourCity, Country</p>
      </div>
    </div>
  );
};

export default ContactUs;
