import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import Plants from "../Pages/Plants";
import Profile from "../Pages/Profile";
import DetailPlants from "../Pages/DetailPlants";
import AuthLayouts from "../Layouts/AuthLayouts";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children:[
        {
            index: true,
            element:<Home></Home>,
        },
        {
            path:'/plants',
            Component:Plants,
        },
        {
            path:'/profile',
            Component:Profile,
        }
    ]
    
  },

  {
    path:"/auth",
    element:<AuthLayouts></AuthLayouts>,
    children:[
      {
        path:'/auth/login',
        element:<Login></Login>
      },
      {
        path:'/auth/register',
        element:<Register></Register>
      }
    ]
  },

  {
    path:'detailPlant/:id',
    element:<DetailPlants></DetailPlants>,
    loader:()=>fetch('/plants.json'),
  }
]);