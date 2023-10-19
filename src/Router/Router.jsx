import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/LogIn/Login";
import Register from "../Pages/Register/Register";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(
            `https://brand-shop-server-assignment-10-jpqxudx4s-shah-alams-projects.vercel.app/users`
          ),
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
        path: "/item/:brandName",
        element: <ViewDetails></ViewDetails>,
        loader: () =>
          fetch(
            "https://brand-shop-server-assignment-10-jpqxudx4s-shah-alams-projects.vercel.app/product"
          ),
      },
    ],
  },
]);

export default Router;
