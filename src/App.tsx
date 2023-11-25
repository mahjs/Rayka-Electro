import { FC, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { mainRoutes, protectedRoutes } from './routes/Routes';
import Navbar from './components/navbar/Navbar';

const App: FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          {mainRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          {isLogin &&
            protectedRoutes.map((route) => <Route key={route.path} path={route.path} element={route.element} />)}
        </Routes>
      </Router>
    </>
  );
};

export default App;
