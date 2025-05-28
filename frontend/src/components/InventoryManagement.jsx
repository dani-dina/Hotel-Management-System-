import InventoryList from '../components/InventoryList';
import InventoryChart from '../components/InventoryChart';

const InventoryManagement = () => {
  const [activeTab, setActiveTab] = useState('list');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Inventory Management</h1>
        <div className="flex space-x-2">
          <button 
            onClick={() => setActiveTab('list')}
            className={`px-4 py-2 ${activeTab === 'list' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            List View
          </button>
          <button 
            onClick={() => setActiveTab('analytics')}
            className={`px-4 py-2 ${activeTab === 'analytics' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            Analytics
          </button>
        </div>
      </div>
      
      {activeTab === 'list' ? <InventoryList /> : <InventoryChart />}
    </div>
  );
};

export default InventoryManagement;