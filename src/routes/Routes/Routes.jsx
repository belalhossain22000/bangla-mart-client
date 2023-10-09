import { createBrowserRouter} from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../pages/Home/Home";
import Products from "../../components/Product/Products";
import Order from "../../components/Order/Order";
import Cart from "../../components/Cart/Cart";
import CheckOut from "../../components/CheckOut/CheckOut";
import OrderTracker from "../../components/Order/OrderTracker";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        path: "/",
        element:<Home/>,
      },
      {
        path: '/store',
        element:<Products/>,
      },
      {
        path: '/top',
        element:<Products/>,
      },
      {
        path: '/pants',
        element:<Products/>,
      },
      {
        path: '/sweaters',
        element:<Products/>,
      },
      {
        path: '/women/tops',
        element:<Products/>,
      },
      {
        path: '/women/dress',
        element:<Products/>,
      },
      {
        path: '/women/pants',
        element:<Products/>,
      },
      {
        path: '/women/denim',
        element:<Products/>,
      },
      {
        path: '/women/sweaters',
        element:<Products/>,
      },
      {
        path: '/order',
        element:<Order/>,
      },
      {
        path: '/cart',
        element:<Cart/>,
      },
      {
        path: '/checkout',
        element:<CheckOut/>,
      },
      {
        path: '/tracker',
        element:<OrderTracker/>,
      },
    ],
  },
]);
