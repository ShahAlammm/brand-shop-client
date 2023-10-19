import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/LogIn/Login";
import Register from "../Pages/Register/Register";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import UpdateProduct from "../Components/UpdateProduct/UpdateProduct";
import Details from "../Components/Details/Details";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`http://localhost:7000/users`),
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/myCart",
        element: <MyCart></MyCart>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/product/:brandName",
        element: <ViewDetails></ViewDetails>,
        loader: () => fetch("http://localhost:7000/product"),
      },
      {
        path:"/updateProduct/:id",
        element:<UpdateProduct></UpdateProduct>,
        loader:({params})=>fetch(`http://localhost:7000/product/${params.id}`)
      },
      {
        path:'/details/:id',
        element: <Details></Details>,
        loader:({params})=>fetch(`http://localhost:7000/product/${params.id}`)
      }
    ],
  },
]);

export default Router;
