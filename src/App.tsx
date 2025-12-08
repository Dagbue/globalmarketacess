import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { routes, pagesWithoutLayout } from './routes';

function App() {
  const location = useLocation();
  const shouldShowLayout = !pagesWithoutLayout.includes(location.pathname);

  return (
    <div className="min-h-screen bg-white">
      {shouldShowLayout && <Header />}
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
      {shouldShowLayout && (
        <>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
