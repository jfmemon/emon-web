import { createBrowserRouter } from "react-router-dom";
import { Main } from "../Layout/Main";
import { Home } from "../Pages/Home/Home";
import { BlogDetails } from "../Pages/Home/BlogDetails/BlogDetails";
import { Favorite } from "../Pages/Favorite/Favorite";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "details",
        element: <BlogDetails></BlogDetails>
      },
      {
        path: "favorite",
        element: <Favorite></Favorite>
      }
    ]
  },
]);
