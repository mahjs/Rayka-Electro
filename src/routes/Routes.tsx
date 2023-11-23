import Dashboard from '../pages/dashboard/Dashboard';
import Home from '../pages/home/Home';

export const mainRoutes = [
  {
    path: '/',
    element: <Home />,
    title: 'main',
  },
];

export const protectedRoutes = [
  {
    path: '/dashboard',
    element: <Dashboard />,
    title: 'Dashboard',
  },
];
