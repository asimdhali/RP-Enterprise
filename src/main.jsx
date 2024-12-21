import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
// import Dashboard from './components/Dashboard/Dashboard.jsx';
// import Details from './components/Details/Details.jsx';
// import Statistics from './components/Statistics/Statistics.jsx';
// import Contact from './components/Contact/Contact.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Account from './components/Account/Account.jsx';
import Orders from './components/Orders/Orders.jsx';
import Wishlist from './components/Wishlist/Wishlist.jsx';
import CartList from './components/Cart/Cart.jsx';
import CheckoutPage from './components/Checkout/Checkout.jsx';
import AccountEdit from './components/Account/AccountEdit.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: "dashboard",
        // element: <Dashboard></Dashboard>
      },
      {
        path: "/account",
        element: <Account></Account>
      },
      {
        path: "/account/edit",
        element: <AccountEdit></AccountEdit>
      },
      {
        path: "/orders",
        element: <Orders></Orders>
      },
      {
        path: "/wishlist",
        element: <Wishlist></Wishlist>
      },
      {
        path: "/cart",
        element: <CartList></CartList>
      },
      {
        path: "/checkout",
        element: <CheckoutPage></CheckoutPage>
      },
      {
        path: "products",
        // element: <Statistics></Statistics>,
      },
      {
        path: "contact",
        // element: <Contact></Contact>,
      },
      // {
      //   path: "/details/:id",
      //   element: <Details></Details>,
      //   loader: async () => {
      //     const response = await fetch("gadgetsData.json");
      //     if(!response.ok) {
      //       throw new Error("Failed to fetch gadgets data");
      //     }
      //     return response.json();
      //   }
      // }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
