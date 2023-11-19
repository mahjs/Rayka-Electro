import { FC } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { mainRoutes } from "./routes/Routes";

const App: FC = () => {
  return (
    <>
      <Router>
        <Routes>
          {mainRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>
    </>
  );
};

export default App;
