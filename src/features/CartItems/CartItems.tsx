import { CartItem, CartTotal } from "../../components";

export const CartItems = ({ handleNext }: { handleNext: () => void }) => {
  return (
    <div className="my-10">
      <div className="h-full bg-gray-100 py-10">
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3 max-h-[350px] overflow-y-auto">
            <CartItem />
          </div>
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <CartTotal handleNext={handleNext} btnText={"Checkout"} />
          </div>
        </div>
      </div>
    </div>
  );
};
