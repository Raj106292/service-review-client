import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddService from "../Pages/AddService/AddService";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/HomePage/Home/Home";
import Login from "../Pages/Login/Login";
import Service from "../Pages/Service/Service";
import Services from "../Pages/Services/Services";
import SignUp from "../Pages/SignUp/SignUp";
import MyReviews from "../Pages/UserReview/MyReviews";
import UserReview from "../Pages/UserReview/UserReview";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                loader: () => fetch('https://service-review-server-side-pi.vercel.app/services'),
                element: <Services></Services>
            },
            {
                path: '/services/:id',
                loader: ({params}) => fetch(`https://service-review-server-side-pi.vercel.app/services/${params.id}`),
                element: <Service></Service>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/review/:id',
                loader: ({params}) => fetch(`https://service-review-server-side-pi.vercel.app/services/${params.id}`),
                element: <PrivateRoute><UserReview></UserReview></PrivateRoute>
            },
            {
                path: '/myReview',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/addService',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])