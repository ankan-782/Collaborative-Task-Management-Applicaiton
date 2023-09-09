import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthLayout from './components/layouts/authentication/AuthLayout';
import DashboardLayout from './components/layouts/dashboard/DashboardLayout';
import Login from './modules/authentication/pages/Login';
import Registration from './modules/authentication/pages/Registration';
import AuthenticationRoute from './modules/authentication/routeManagement/AuthenticationRoute';
import CreateTeam from './modules/dashboard/pages/CreateTeam';
import DashboardHome from './modules/dashboard/pages/DashboardHome';
import SingleTeam from './modules/dashboard/pages/SingleTeam';
import PrivateRoute from './modules/dashboard/routeManagement/PrivateRoute';

function App() {

    return (
        <Routes>
            <Route path='/dashboard' element={<PrivateRoute><DashboardLayout /></PrivateRoute>}>
                <Route index element={<DashboardHome />} />
                <Route path='dashboardHome' element={<DashboardHome />} />
                <Route path='createTeam' element={<CreateTeam />} />
                <Route path='teams/:teamId' element={<SingleTeam />} />
            </Route>
            <Route path='/' element={<AuthenticationRoute><AuthLayout /></AuthenticationRoute>}>
                <Route index element={<Login />} />
                <Route path='login' element={<Login />} />
                <Route path='register' element={<Registration />} />
            </Route>
        </Routes>
    );
}

export default App;
