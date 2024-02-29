import { LoginCom, SignupCom, TabsDemo } from "../../components";
import { MainLayout } from "../../layouts";

const Auth = () => {
  return (
    <MainLayout>
      <TabsDemo
        tabs={[
          {
            title: "Login",
            value: "Login",
            content: (
              <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 font-bold text-gray-900 bg-gray-300">
                <LoginCom />
              </div>
            ),
          },
          {
            title: "SignUp",
            value: "SignUp",
            content: (
              <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 font-bold text-gray-900 bg-gray-300">
                <SignupCom />
              </div>
            ),
          },
        ]}
      />
    </MainLayout>
  );
};

export default Auth;
