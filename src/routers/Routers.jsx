import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../conponents/Home/Home";
import ErrorPage from "../conponents/ErrorPage/ErrorPage";
import Login from "../conponents/Login/Login";
import Register from "../conponents/Register/Register";
import Orders from "../conponents/Orders/Orders";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/orders",
                element: <PrivateRoute><Orders></Orders></PrivateRoute>,
            },
        ]
    },
]);

export default router;