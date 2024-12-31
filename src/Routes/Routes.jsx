import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import OurMenu from "../Pages/OurMenu/OurManu";
  
export const Routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path: '/ourMenu',
          element: <OurMenu></OurMenu>,
        }
      ]
    },
  ]);