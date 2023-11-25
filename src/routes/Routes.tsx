import Dashboard from '../pages/dashboard/Dashboard';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import SignUp from '../pages/signUp/signUp';

export const mainRoutes = [
  {
    path: '/',
    element: <Home />,
    title: 'main',
  },
  {
    path: '/login',
    element: <Login />,
    title: 'login',
  },
  {
    path: '/sign-up',
    element: <SignUp />,
    title: 'signup',
  },
];

export const protectedRoutes = [
  {
    path: '/dashboard',
    element: <Dashboard />,
    title: 'Dashboard',
  },
];
