import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import FoodDetails from "../Components/FoodDetails/FoodDetails";
import AllFoods from "../Components/AllFoods/AllFoods";
import LogIn from "../Pages/LogIn/LogIn";

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
        path: "/logIn",
        element: <LogIn></LogIn>,
      },
    ],
  },
]);

export default router;
