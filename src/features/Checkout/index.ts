import * as Yup from "yup";
export * from "./Checkout";

export interface CheckoutTypes {
  name: string;
  address: string;
  city: string;
  number: number | null;
  postalCode: number | null;
}

export const initialValues: CheckoutTypes = {
  name: "",
  address: "",
  city: "",
  number: null,
  postalCode: null,
};

export const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  address: Yup.string().required("Required!"),
  city: Yup.string().required("Required!"),
  number: Yup.number().required("Required!"),
  postalCode: Yup.number().required("Required!"),
});
