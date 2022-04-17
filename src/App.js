import { Route, Routes } from 'react-router-dom';
import App from './Pages/Splash/App';
import Login from './Pages/Login/Login'
import Sessions from './Pages/Sessions/index'
import SessionList from './Pages/Sessions/Sessionlist'
import DashboardPage from './Pages/Dashboard/Dashboard'
import Live from './Pages/Live/live'
import SessionsAdd from './Pages/Sessions/SessionsAdd';



function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboardpage" element={<DashboardPage />} />
      <Route path="/sessions" element={<Sessions />} />
      <Route path="/sessions/:id" element={<SessionsAdd />} />
      <Route path="/live" element={<Live />} />

    
    </Routes>
  );
}

export default AppRoutes;
