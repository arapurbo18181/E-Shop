import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Homepage = lazy(() => import("./pages/Home/Home"));
const Aboutpage = lazy(() => import("./pages/About/About"));
const Productspage = lazy(() => import("./pages/Products/Products"));
const AuthPage = lazy(() => import("./pages/Auth/Auth"));
const ContactPage = lazy(() => import("./pages/Contact/Contact"));
const CartPage = lazy(() => import("./pages/Cart/Cart"));

const ProjectRoutes = () => {
  return (
    <>
      <Suspense fallback={<>Loading....</>}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/shop" element={<Productspage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
export default ProjectRoutes;
