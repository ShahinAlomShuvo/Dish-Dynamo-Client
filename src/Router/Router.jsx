import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import FoodDetails from "../Components/FoodDetails/FoodDetails";

import LogIn from "../Pages/LogIn/LogIn";
import Registration from "../Pages/Registration/Registration";
import Blog from "../Pages/BlogPage/Blog";
import BlogPost from "../Pages/BlogPage/BlogPost";
import AddFood from "../Pages/AddFood/AddFood";
import MyAddedFood from "../Pages/MyAddedFood/MyAddedFood";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import OrderFood from "../Pages/OrderFood/OrderFood";
import MyOrder from "../Pages/MyOrder/MyOrder";
import UpdateFood from "../Pages/MyAddedFood/UpdateFood";
import AllFoods from "../Pages/AllFoods/AllFoods";
import AboutUs from "../Pages/AboutUs/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/foods"),
      },
      {
        path: "/allFoods",
        element: <AllFoods></AllFoods>,
        loader: () => fetch("http://localhost:5000/foodsCount"),
      },
      {
        path: "/foodDetails/:id",
        element: <FoodDetails></FoodDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/foods/${params.id}`),
      },
      {
        path: "/orderingFood/:id",
        element: (
          <PrivateRoute>
            <OrderFood></OrderFood>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/foods/${params.id}`),
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/logIn",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
        loader: () => fetch("http://localhost:5000/blogs"),
      },
      {
        path: "/blogPost/:id",
        element: <BlogPost></BlogPost>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/blogs/${params.id}`),
      },
      {
        path: "/add-food",
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-added-food",
        element: (
          <PrivateRoute>
            <MyAddedFood></MyAddedFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-order",
        element: (
          <PrivateRoute>
            <MyOrder></MyOrder>
          </PrivateRoute>
        ),
      },
      {
        path: "/foodUpdate/:id",
        element: <UpdateFood></UpdateFood>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/usersfood/${params.id}`),
      },
    ],
  },
]);

export default router;
