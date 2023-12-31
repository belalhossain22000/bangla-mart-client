import { createBrowserRouter} from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../pages/Home/Home";
import Products from "../../components/Product/Products";
import Order from "../../components/Order/Order";
import Cart from "../../components/Cart/Cart";
import CheckOut from "../../components/CheckOut/CheckOut";
import OrderTracker from "../../components/Order/OrderTracker";
import ProductDetail from "../../components/ProductDetails/ProductDetail";
import Register from "../../components/Auth/Register";
import Login from "../../components/Auth/Login";
import DashbordLayout from "../../Dashbord/Layout/DashbordLayout";
import DashboardProducts from "../../Dashbord/components/DashBoardProducts/DashboardProducts";
import Dashbord from "../../Dashbord/components/Dashbord/Dashbord";
import Users from "../../Dashbord/components/Users/Users";
import DashBoardOrders from "../../Dashbord/components/DashBoardOrders/DashBoardOrders";
import AddProducts from "../../Dashbord/components/AddProducts/AddProducts";
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
        path: '/mens/top',
        element:<Products/>,
      },
      {
        path: '/mens/pants',
        element:<Products/>,
      },
      {
        path: '/mens/punjabi',
        element:<Products/>,
      },
      {
        path: '/mens/shirts',
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
        path: '/women/Lehenga',
        element:<Products/>,
      },
      {
        path: '/women/sweaters',
        element:<Products/>,
      },
      {
        path: '/product-details/:id',
        element:<ProductDetail/>,
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
      {
        path: '/register',
        element:<Register/>,
      },
      {
        path: '/login',
        element:<Login/>,
      },
    ],
  },
  {
    path:"/dashboard",
    element:<DashbordLayout/>,
    children:[
      {
        path:"/dashboard",
        element:<Dashbord/>
      },
      {
        path:"/dashboard/products",
        element:<DashboardProducts/>
      },
      {
        path:"/dashboard/users",
        element:<Users/>
      },
      {
        path:"/dashboard/products",
        element:<DashboardProducts/>
      },
      {
        path:"/dashboard/orders",
        element:<DashBoardOrders/>
      },
      {
        path:"/dashboard/add",
        element:<AddProducts/>
      }
    ]
  }
]);
