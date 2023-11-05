import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Errorcomponent from './components/errorHandling/ErrorComponent.jsx';
import Product from './components/Product/Product';
import Footer from './components/footer/Footer';
import Feature from './components/featured/Feature';
import Login from './components/authpages/Login';
import Signup from './components/authpages/Signup';
import Category from './components/category/Category';
import Allproduct from './components/Product/Allproduct';
import Route from './components/route/Route';
import ProductDetails from './components/Product/ProductDetails';
// i am real user i can edit if i want
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Route />,
      errorElement: <Errorcomponent />,
      children: [
        {
          path: '/products',
          element: <Allproduct />,
        },
        {
          path: '/',
          element: <Category />,
        },
        {
          path: '/productDetail',
          element: <ProductDetails />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
// export router;
