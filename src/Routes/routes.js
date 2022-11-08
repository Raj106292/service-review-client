import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/HomePage/Home/Home";
import Login from "../Pages/Login/Login";
import Service from "../Pages/Service/Service";
import Services from "../Pages/Services/Services";
import SignUp from "../Pages/SignUp/SignUp";
import UserReview from "../Pages/UserReview/UserReview";

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
                loader: () => fetch('http://localhost:5000/services'),
                element: <Services></Services>
            },
            {
                path: '/services/:id',
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`),
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
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <UserReview></UserReview>
            }
        ]
    }
])