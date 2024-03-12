import { TextInput } from "../../components/ui";

export const CheckoutForm = () => {
  return (
    <>
      <TextInput name="name" inputType="text" label="Name" />
      <TextInput name="address" inputType="text" label="Address" />
      <TextInput name="city" inputType="text" label="City" />
      <TextInput name="number" inputType="number" label="Phone Number" />
      <TextInput name="postalCode" inputType="number" label="Postal Code" />
    </>
  );
};
