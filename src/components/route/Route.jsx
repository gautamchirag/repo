import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
function Route() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

// import { Outlet } from 'react-router-dom';

export default Route;
