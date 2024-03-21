import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Homepage = lazy(() => import("./pages/Home/Home"));
const Aboutpage = lazy(() => import("./pages/About/About"));
const Shoppage = lazy(() => import("./pages/Shop/Shop"));
const AuthPage = lazy(() => import("./pages/Auth/Auth"));
const ContactPage = lazy(() => import("./pages/Contact/Contact"));
const CartPage = lazy(() => import("./pages/Cart/Cart"));
const ProductPage = lazy(() => import("./pages/Product/Product"));
const ProfilePage = lazy(() => import("./pages/Profile/Profile"));

const ProjectRoutes = () => {
  return (
    <>
      <Suspense fallback={<>Loading....</>}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/shop" element={<Shoppage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Suspense>
    </>
  );
};
export default ProjectRoutes;
