import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import HomeLayout from "../layouts/HomeLayout";
import Services from "../pages/Services";
import MyProfile from "../pages/MyProfile";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ServiceDetails from '../pages/ServiceDetails'
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../pages/Loading";
import ErrorPage from "../pages/ErrorPage";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        hydrateFallbackElement: <Loading />,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/profile',
                element: <PrivateRoute>
                    <MyProfile></MyProfile>
                </PrivateRoute>
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: "/service-details/:id",
        element: (
            <PrivateRoute>
                <ServiceDetails></ServiceDetails>
            </PrivateRoute>
        ),
        loader: () => fetch("/services.json"),
    },
    {
        path: "/*",
        element: <ErrorPage />,
    },
])