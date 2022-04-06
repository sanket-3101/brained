import { Route, Routes } from 'react-router-dom';
import App from './Pages/Splash/App';
import Login from './Pages/Login/Login'
import Home from './Pages/Home/Home'
import Sesssion from './Pages/Session';
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/session" element={<Sesssion />} />
    </Routes>
  );
}

export default AppRoutes;
