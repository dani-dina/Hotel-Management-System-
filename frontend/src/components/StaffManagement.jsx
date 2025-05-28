import StaffTable from '../components/StaffTable';
import AddStaffModal from '../components/AddStaffModal';

const StaffManagement = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Staff Management</h1>
        <button 
          onClick={() => setIsAddModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Add Staff Member
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <StaffTable />
      </div>
      
      {isAddModalOpen && (
        <AddStaffModal onClose={() => setIsAddModalOpen(false)} />
      )}
    </div>
  );
};

export default StaffManagement;