import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import About from "../views/About";
import OurVision from "../views/OurVision";
import OurProducts from "../views/OurProducts";
import BusinessLocations from "../views/BusinessLocations";
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