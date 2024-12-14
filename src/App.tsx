import React, { Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import routes from './routes';

const App: React.FC = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            >
              {route.children && route.children.map((childRoute) => (
                <Route
                  key={childRoute.path}
                  path={childRoute.path}
                  element={<childRoute.element />}
                >
                  {childRoute.children && childRoute.children.map((grandChildRoute) => (
                    <Route
                      key={grandChildRoute.path}
                      path={grandChildRoute.path}
                      element={<grandChildRoute.element />}
                    />
                  ))}
                </Route>
              ))}
            </Route>
          ))}
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
