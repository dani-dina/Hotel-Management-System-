import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/404';
import Navbar from './components/Navbar';
import Info from './components/Info';
import Footer from './components/Footer';
import Register from './pages/Register';
import Rooms from './pages/Rooms';
import ContactUs from './pages/Contact';

function App() {
  return (
    <div className='w-full h-screen'>
    <Info />
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-up' element={<Login />} />
        <Route path='/sign-in' element={<Register />} />
        <Route path='/rooms' element={<Rooms />} />
        <Route path='*' element={<NotFound />}/>
        <Route path='*' element={<ContactUs />}/>
      </Routes>
    <Footer />
    </div>
  );
}

export default App;
