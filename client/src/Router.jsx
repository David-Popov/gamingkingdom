import Wishlist from "./components/Wishlist";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
        path: "/wishlist",
        element: <Wishlist />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/register",
        element: <RegisterPage />,
    },
]);