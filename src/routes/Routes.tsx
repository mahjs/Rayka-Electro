import Dashboard from '../pages/dashboard/Dashboard';
import EducationLayout from '../pages/education/EducationLayout';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import ActivateEmail from '../pages/signUp/activateEmail/ActivateEmail';
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
  {
    path: '/activate-email',
    element: <ActivateEmail />,
    title: 'activateEmail',
  },
  {
    path: '/education',
    element: <EducationLayout />,
    title: 'education',
  },
  {
    path: '/education/:id',
    element: <EducationLayout />,
    title: 'educationDetail',
  },
];

export const protectedRoutes = [
  {
    path: '/dashboard',
    element: <Dashboard />,
    title: 'Dashboard',
  },
  {
    path: '/admin',
    element: <Dashboard />,
    title: 'Admin Dashboard',
  },
];
