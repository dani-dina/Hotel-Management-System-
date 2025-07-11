import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/404';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Register from './pages/Register';
import Rooms from './pages/Rooms';
import ContactUs from './pages/Contact';
// import ProfilePage from './pages/Profile';
import OrderPage from './pages/Order';
import Reservations from './pages/Reservations';
import Dashboard from './pages/Dashboard';
import Loading from './components/Loading';
import MenuPage from './components/Menu';
import CartPage from './components/Cart';
import Events from '../src/pages/Events';
import ProfilePage from '../src/pages/Profile';
import VerifyEmailPage from '../src/pages/VerifyEmail';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const checkAuth = async () => {
      try {
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
    if (!isAuthenticated) return <Navigate to="/auth/login" />;
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

  // Check if current route is auth page (login/register)
  const isAuthPage = ['/auth/login', '/auth/register'].includes(location.pathname);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar 
        isAuthenticated={isAuthenticated} 
        userRole={userRole} 
        setIsAuthenticated={setIsAuthenticated}
      />
      
      <main className='flex-grow'>
        <Routes>
          {/* Public route */}
          <Route path='/' element={<Home />} />
          <Route path='/users/profile' element={<ProfilePage />} />
          <Route path='/dash' element={<Dashboard />} />
          <Route path='/res' element={<Reservations />} />
          <Route path='/events' element={<Events />} />
          <Route path='/' element={<OrderPage />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/rooms' element={<Rooms />} />
          <Route path='/reservations' element={<Reservations/>} />
          <Route path='/menu' element={<MenuPage/>} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/mail" element={<VerifyEmailPage />} />
          {/* Auth routes */}
          <Route path='/auth/login' element={
            <PublicRoute>
              <Login 
                setIsAuthenticated={setIsAuthenticated} 
                setUserRole={setUserRole}
              />
            </PublicRoute>
          } />
          <Route path='/auth/register' element={
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
          
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </main>
      
      {/* Only show footer if not on auth pages */}
      {!isAuthPage && <Footer />}
    </div>
  );
}

export default App;