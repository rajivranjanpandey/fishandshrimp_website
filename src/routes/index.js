import { createBrowserRouter } from "react-router-dom";
import Home from "../views/home/Home";
import About from "../views/about/About";
import OurVision from "../views/ourVision/OurVision";
import OurProducts from "../views/ourProducts/OurProducts";
import BusinessLocations from "../views/businessLocations/BusinessLocations";
import MaiinWrapper from "../views/MaiinWrapper";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <MaiinWrapper />,
        children: [
            { index: true, element: <Home /> },
            { path: '/products', element: <OurProducts /> },
            { path: '/business-locations', element: <BusinessLocations /> },
            { path: '/our-vision', element: <OurVision /> },
            { path: '/about-us', element: <About /> },
        ]
    },
]);
export default routes;