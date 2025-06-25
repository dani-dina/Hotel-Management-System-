import AdminLayout from '../src/layout/AdminLayout';
import { Route, Routes} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AnalyticsPage from '../src/components/Analytics';

const App = () => {
  return (
    <div> 
      <AdminLayout children={<Dashboard />} />
       <Routes>
        {/* <Route path='/admin/reports' element={<AnalyticsPage />} /> */}
       </Routes>
    </div>
  );
}

export default App;