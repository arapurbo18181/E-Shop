import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Homepage = lazy(() => import("./pages/Home/Home"));
const Aboutpage = lazy(() => import("./pages/About/About"));
const Productspage = lazy(() => import("./pages/Products/Products"));
const LoginPage = lazy(() => import("./pages/Login/Login"));
const SignupPage = lazy(() => import("./pages/Signup/Signup"));
const ContactPage = lazy(() => import("./pages/Contact/Contact"));

const ProjectRoutes = () => {
  return (
    <>
      <Suspense fallback={<>Loading....</>}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/shop" element={<Productspage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
export default ProjectRoutes;
