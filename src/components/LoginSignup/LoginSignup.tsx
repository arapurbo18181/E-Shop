import { useState } from "react";

export const LoginSignup = () => {
  const [signIn, toggle] = useState(true);

  return (
    <div className="flex justify-center items-center min-h-screen font-montserrat bg-f6f5f7">
      <div className="relative overflow-hidden w-full max-w-md bg-white shadow-md rounded-lg">
        {/* SignUpContainer */}
        <div
          className={`absolute top-0 h-full transition-all duration-600 ${
            signIn ? "opacity-0" : "opacity-100 translate-x-full z-5"
          }`}
        >
          {/* <SignUpForm /> */}
        </div>

        {/* SignInContainer */}
        <div
          className={`absolute top-0 h-full transition-all duration-600 ${
            signIn ? "translate-x-full" : ""
          }`}
        >
          {/* <SignInForm /> */}
        </div>

        {/* OverlayContainer */}
        <div
          className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-600 z-100 ${
            signIn ? "transform translate-x-full" : ""
          }`}
        >
          {/* Overlay */}
          <div
            className={`relative h-full w-200 transition-transform duration-600 ${
              signIn ? "transform translate-x-50%" : ""
            }`}
          >
            {/* <OverlayContent signIn={signIn} onToggle={toggle} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
