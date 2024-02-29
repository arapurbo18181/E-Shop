import { Form, Formik } from "formik";
import * as Yup from "yup";
import { ShimmerBtn, TextInput } from "../ui";

interface LoginValues {
  email: string;
  password: string;
}

const initialValues: LoginValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().required("Required!").email("Invalid Email Format"),
  password: Yup.string().required("Required!"),
});

const onSubmit = (values: LoginValues) => {
  console.log(values);
};

export const LoginCom = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center space-y-5">
      <h2 className="text-2xl font-bold ">Login</h2>
      <div className="border rounded-xl shadow-xl p-5">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form className="space-y-5">
            <TextInput label="email" />
            <TextInput label="password" />
            <ShimmerBtn type="submit">Submit</ShimmerBtn>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
