import Image1 from "../../assets/product1.jpg";
import { ShimmerBtn } from "../ui";
import { PinContainer } from "./3dPin";

export function AnimatedPinDemo() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <PinContainer title="View Product" href="https://alpharyzen.com">
        <div className="flex basis-full flex-col p-4 tracking-tight sm:basis-1/2 w-[20rem] space-y-4">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-gray-100">
            Category 1
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-gray-400 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatum, cum.
            </span>
          </div>
          <img src={Image1} alt="" />
          <div className="flex justify-between items-center">
            <div className="px-4 py-2 rounded-xl text-xs font-normal text-white space-x-1">
              <span className="text-lg font-bold text-red-500"> $399 </span>{" "}
              <span className="text-gray-500 line-through"> $499 </span>
            </div>
            <div>
              <ShimmerBtn type="button">View</ShimmerBtn>
            </div>
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
