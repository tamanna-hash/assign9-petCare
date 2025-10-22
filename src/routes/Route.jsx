import { createBrowserRouter } from "react-router";
import Header from "../components/header/Header";
import Home from "../pages/Home";

export const route = createBrowserRouter([{
    path: '/',
    element: <Home></Home>
}
])