import { redirect, createBrowserRouter } from "react-router-dom";
import Home from "../views/home/Home";
import About from "../views/about/About";
import OurVision from "../views/ourVision/OurVision";
import OurProducts from "../views/ourProducts/OurProducts";
import BusinessLocations from "../views/businessLocations/BusinessLocations";
import PrivacyPolicy from "../views/privacyPolicy/privacyPolicy";
import TermsConditions from "../views/termsConditions/termsConditions";

import MaiinWrapper from "../views/MaiinWrapper";
import Ecommerce from "../components/ecommerce";
// https://play.google.com/store/apps/details?id=co.fishshirip_vendor&pcampaignid=web_share

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
            { path: '/about-us_app', element: <About /> },
            { path: '/privacy-policy', element: <PrivacyPolicy /> },
            { path: '/privacy-policy_app', element: <PrivacyPolicy /> },
            { path: '/terms-conditions', element: <TermsConditions /> },
            { path: '/terms-conditions_app', element: <TermsConditions /> },
            { path: '/ecommerce', element: <Ecommerce /> }

        ]
    },
]);
export default routes;