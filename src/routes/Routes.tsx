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
    path: '/sign-up',
    element: <SignUp />,
    title: 'sign-up',
  },
  {
    path: '/login',
    element: <Login />,
    title: 'login',
  },
];
