import { Form, Formik } from "formik";
import { CheckoutTypes, initialValues, validationSchema } from ".";
import { CartItem, CartTotal } from "../../components";
import { CheckoutForm } from "./CheckoutForm";

export const Checkout = ({ handleNext }: { handleNext: () => void }) => {
  const onSubmit = (values: CheckoutTypes) => {
    if (values) {
      console.log(values);
      handleNext();
    }
  };
  return (
    <div className="my-10">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        className="h-full bg-gray-100 py-10"
      >
        <Form className="flex flex-col md:flex-row justify-center items-start w-full">
          <div className="mx-auto max-w-5xl justify-center space-y-4 px-6 w-full">
            <h1 className="mb-10 text-center text-2xl font-bold">
              Shipping Address
            </h1>
            <div className=" p-5 space-y-5 w-full">
              <CheckoutForm />
            </div>
          </div>
          <div className="mx-auto max-w-5xl justify-center space-y-4 px-6">
            <h1 className="mb-10 text-center text-2xl font-bold">
              Order Summary
            </h1>
            <div className="rounded-lg max-h-[350px] overflow-y-auto">
              <CartItem />
            </div>
            <div className="h-full rounded-lg border bg-white p-6 shadow-md">
              <CartTotal btnText={"Confirm Order"} />
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
