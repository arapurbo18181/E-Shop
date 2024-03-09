import { Form, Formik } from "formik";
import { TextInput } from "../../components/ui";

interface SearchTypes {
  search: string;
}

const initialValues: SearchTypes = {
  search: "",
};

const onSubmit = (value: SearchTypes) => {
  console.log(value);
};

export const Search = () => {
  return (
    <div className="w-1/2">
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className="">
          <TextInput inputType="text" label="Search" name="search" />
        </Form>
      </Formik>
    </div>
  );
};
