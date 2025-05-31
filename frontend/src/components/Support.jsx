import { useState } from "react";
import { FaHeadset, FaTimes, FaPaperPlane } from "react-icons/fa";

const SupportIcon = ({ onToggleChat }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button 
        onClick={onToggleChat}
        className="p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all"
      >
        <FaHeadset className="w-6 h-6" />
      </button>
    </div>
  );
};

const SupportChat = ({ isOpen, onClose }) => {
  const [message, setMessage] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-20 right-6 z-50 w-72 bg-white rounded-lg shadow-xl overflow-hidden">
      <div className="flex justify-between items-center p-3 bg-blue-600 text-white">
        <h3 className="font-medium">Support Chat</h3>
        <button onClick={onClose}>
          <FaTimes className="w-5 h-5" />
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
        <button className="p-2 bg-blue-600 text-white rounded-r hover:bg-blue-700">
          <FaPaperPlane className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

const SupportSystem = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <SupportIcon onToggleChat={() => setIsChatOpen(!isChatOpen)} />
      <SupportChat 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
      />
    </>
  );
};

export default SupportSystem;