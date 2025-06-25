// src/layouts/AdminLayout.jsx
import AdminNavbar from "../components/Navigation";

const AdminLayout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <AdminNavbar />
      
      <div className="py-5">
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;