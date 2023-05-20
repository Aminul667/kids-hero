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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "alltoys",
        element: <AllToys></AllToys>,
        loader:() => fetch('http://localhost:5000/all-toys')
      },
      {
        path: "mytoys",
        element: <MyToys></MyToys>,
      },
      {
        path: "addtoy",
        element: <AddToy></AddToy>,
      },
      {
        path:"alltoys/:id",
        element: <ToyDetails></ToyDetails>
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
        path: 'register',
        element: <Register></Register>
      }
    ],
  },
]);

export default router;
