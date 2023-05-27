import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../MainLayout";
import HomePage from "../PageLayout/HomePage/HomePage";
import OurMenuPage from "../PageLayout/OurMenuPage/OurMenuPage";
import OurShop from "../PageLayout/OurShopPage/OurShop";
import Contactus from "../PageLayout/ContactPage/Contactus";
import LoginPage from "../PageLayout/LoginPage/LoginPage";

const route = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children:[
            {
                path:"/",
                element: <HomePage/>
            },
            {
                path:"/ourmenu",
                element: <OurMenuPage/>
            },
            {
                path:'/ourshop',
                element: <OurShop/>
            },
            {
                path:'/contact',
                element: <Contactus/>
            }
        ]
    },
    {
        path: "/login",
        element: <LoginPage/>
    }
]);



export default route;