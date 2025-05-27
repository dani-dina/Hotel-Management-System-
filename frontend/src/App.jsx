import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/404';
import Navbar from './components/Navbar';
import Info from './components/Info';
import Footer from './components/Footer';
import Register from './pages/Register';
import Rooms from './pages/Rooms';
import ContactUs from './pages/Contact';
import ProfilePage from './pages/Profile';
import OrderPage from './pages/Order';
import Reservations from './pages/Reservations';
import Dashboard from './pages/Dashboard';
import Loading from './components/Loading';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    // Check authentication status (replace with your actual auth check)
    const checkAuth = async () => {
      try {
        // Simulate checking token from localStorage
        const token = localStorage.getItem('authToken');
        const role = localStorage.getItem('userRole');
        
        if (token) {
          setIsAuthenticated(true);
          setUserRole(role || 'guest');
        }
      } catch (error) {
        console.error('Authentication check failed:', error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const ProtectedRoute = ({ children, roles = [] }) => {
    if (loading) return <Loading />;
    if (!isAuthenticated) return <Navigate to="/sign-in" />;
    if (roles.length > 0 && !roles.includes(userRole)) {
      return <Navigate to="/" />;
    }
    return children;
  };

  const PublicRoute = ({ children }) => {
    if (loading) return <Loading />;
    if (isAuthenticated) return <Navigate to="/profile" />;
    return children;
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='flex flex-col min-h-screen'>
      <Info />
      <Navbar 
        isAuthenticated={isAuthenticated} 
        userRole={userRole} 
        setIsAuthenticated={setIsAuthenticated}
      />
      
      <main className='flex-grow'>
        <Routes>
          {/* Public routes */}
          <Route path='/' element={<Home />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/rooms' element={<Rooms />} />
          
          {/* Auth routes */}
          <Route path='/sign-in' element={
            <PublicRoute>
              <Login 
                setIsAuthenticated={setIsAuthenticated} 
                setUserRole={setUserRole}
              />
            </PublicRoute>
          } />
          <Route path='/sign-up' element={
            <PublicRoute>
              <Register 
                setIsAuthenticated={setIsAuthenticated} 
                setUserRole={setUserRole}
              />
            </PublicRoute>
          } />
          
          {/* Protected routes */}
          <Route path='/profile' element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          } />
          
          <Route path='/orders' element={
            <ProtectedRoute>
              <OrderPage />
            </ProtectedRoute>
          } />
          
          <Route path='/reservations' element={
            <ProtectedRoute roles={['admin', 'staff']}>
              <Reservations />
            </ProtectedRoute>
          } />
          
          <Route path='/dashboard' element={
            <ProtectedRoute roles={['admin']}>
              <Dashboard />
            </ProtectedRoute>
          } />
          
          {/* 404 */}
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;