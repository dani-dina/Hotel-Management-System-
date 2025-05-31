import { useState } from 'react';
import { FaComment, FaTimes, FaPaperPlane } from 'react-icons/fa';

const SupportChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          <FaComment size={18} />
        </button>
      ) : (
        <div className="w-72 bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="flex justify-between items-center p-3 bg-blue-600 text-white">
            <h3 className="font-medium">Support Chat</h3>
            <button onClick={() => setIsOpen(false)}>
              <FaTimes />
            </button>
          </div>
          <div className="h-48 p-3 overflow-y-auto bg-gray-50">
            <div className="text-sm mb-2">Support: Hello! How can we help?</div>
          </div>
          <div className="flex p-2 border-t">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-2 text-sm border rounded-l focus:outline-none"
            />
            <button className="p-2 bg-primary text-white rounded-r hover:bg-blue-700">
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SupportChat;