import { Form, Formik } from "formik";
import * as Yup from "yup";
import { ShimmerBtn, TextInput } from "../../components/ui";

interface SignupValues {
  name: string;
  email: string;
  password: string;
}

const initialValues: SignupValues = {
  name: "",
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().required("Required!").email("Invalid Email Format"),
  password: Yup.string().required("Required!"),
});

const onSubmit = (values: SignupValues) => {
  console.log(values);
};

export const Signup = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center space-y-5">
      <h2 className="text-2xl font-bold ">Sign Up</h2>
      <div className="border rounded-xl shadow-xl p-5">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form className="space-y-5">
            <TextInput name="name" inputType="text" label="Name" />
            <TextInput name="email" inputType="email" label="Email" />
            <TextInput name="password" inputType="password" label="Password" />
            <ShimmerBtn type="submit">Submit</ShimmerBtn>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
