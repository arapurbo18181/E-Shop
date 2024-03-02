import { ShimmerBtn } from "../ui";

export const CartTotal = ({ btnText }: { btnText: string }) => {
  return (
    <>
      <div className="mb-2 flex justify-between">
        <p className="text-gray-700">Subtotal</p>
        <p className="text-gray-700">$129.99</p>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-700">Shipping</p>
        <p className="text-gray-700">$4.99</p>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between">
        <p className="text-lg font-bold">Total</p>
        <div className="">
          <p className="mb-1 text-lg font-bold">$134.98 USD</p>
          <p className="text-sm text-gray-700">including VAT</p>
        </div>
      </div>
      <ShimmerBtn type="submit">{btnText}</ShimmerBtn>
    </>
  );
};
