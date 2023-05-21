import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import AddToy from "../pages/AddToy/AddToy";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import UpdateToys from "../pages/MyToys/UpdateToys";
import PrivateRoute from "../provider/PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/toys"),
      },
      {
        path: "alltoys",
        element: <AllToys></AllToys>,
        loader: () => fetch("http://localhost:5000/all-toys"),
      },
      {
        path: "alltoys/details/:id",
        element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/toys-id/${params.id}`),
      },
      {
        path: "mytoys",
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
        // loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
      },
      {
        path: "updatetoy/:id",
        element: <UpdateToys></UpdateToys>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/update-toys/${params.id}`),
      },
      {
        path: "addtoy",
        element: <PrivateRoute><AddToy></AddToy></PrivateRoute>,
      },
      {
        path: "alltoys/:id",
        element: <ToyDetails></ToyDetails>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
