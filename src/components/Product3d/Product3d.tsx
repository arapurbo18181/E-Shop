import ProductImg from "../../assets/product1.jpg";
import { ShimmerBtn } from "../ui";
import { CardBody, CardContainer, CardItem } from "./3dCard";

interface ProductCardProps {
  btnText: string;
}

export function ThreeDCardDemo({ btnText }: ProductCardProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-black/[0.1] w-auto sm:w- h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 text-white"
        >
          Product 1
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={ProductImg}
            height="1000"
            width="1000"
            className=" w-full object-cover rounded-xl group-hover/card:shadow-xl border border-gray-800"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal text-white space-x-1 flex items-center"
          >
            <span className="text-lg font-bold text-red-500"> $399 </span>{" "}
            <span className="text-gray-500 line-through"> $499 </span>
          </CardItem>
          <CardItem translateZ={20}>
            <ShimmerBtn type="button" className="min-w-max">
              {btnText}
            </ShimmerBtn>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
