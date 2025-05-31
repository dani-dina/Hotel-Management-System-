import { FaQuestionCircle, FaHeadset } from "react-icons/fa"; // Using react-icons

const SupportIcon = () => {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Main floating button */}
      <button className="p-3 bg-primary text-white rounded-full shadow-lg hover:bg-blue-700 transition-all">
        <FaHeadset className="w-4 h-4" /> {/* or FaQuestionCircle */}
      </button>
      
      {/* Optional pulse animation (uncomment to use) */}
      {/* <div className="absolute inset-0 rounded-full bg-blue-600 opacity-0 animate-ping" /> */}
    </div>
  );
};

export default SupportIcon;