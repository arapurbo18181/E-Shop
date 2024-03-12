import { Login, Signup } from "../../features";
import { MainLayout } from "../../layouts";
import { Tabs } from "./Tabs";

const Auth = () => {
  return (
    <MainLayout>
      <Tabs
        tabs={[
          {
            title: "Login",
            value: "Login",
            content: (
              <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 font-bold text-gray-900 bg-gray-300">
                <Login />
              </div>
            ),
          },
          {
            title: "SignUp",
            value: "SignUp",
            content: (
              <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 font-bold text-gray-900 bg-gray-300">
                <Signup />
              </div>
            ),
          },
        ]}
      />
    </MainLayout>
  );
};

export default Auth;
