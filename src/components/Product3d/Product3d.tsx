import ProductImg from "../../assets/product1.jpg";
import { ShimmerBtn } from "../ui";
import { CardBody, CardContainer, CardItem } from "./3dCard";

export function ThreeDCardDemo() {
  return (
    <section className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        <CardContainer className="inter-var">
          <CardBody className="relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 text-white"
            >
              Product 1
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 text-gray-300"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero,
              obcaecati.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src={ProductImg}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl border border-gray-800"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl text-xs font-normal text-white space-x-1"
              >
                <span className="text-lg font-bold text-red-500"> $399 </span>{" "}
                <span className="text-gray-500 line-through"> $499 </span>
              </CardItem>
              <CardItem translateZ={20}>
                <ShimmerBtn type="button">View</ShimmerBtn>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className="relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 text-white"
            >
              Product 1
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 text-gray-300"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero,
              obcaecati.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src={ProductImg}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl border border-gray-800"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl text-xs font-normal text-white space-x-1"
              >
                <span className="text-lg font-bold text-red-500"> $399 </span>{" "}
                <span className="text-gray-500 line-through"> $499 </span>
              </CardItem>
              <CardItem translateZ={20}>
                <ShimmerBtn type="button">View</ShimmerBtn>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className="relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 text-white"
            >
              Product 1
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 text-gray-300"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero,
              obcaecati.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src={ProductImg}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl border border-gray-800"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl text-xs font-normal text-white space-x-1"
              >
                <span className="text-lg font-bold text-red-500"> $399 </span>{" "}
                <span className="text-gray-500 line-through"> $499 </span>
              </CardItem>
              <CardItem translateZ={20}>
                <ShimmerBtn type="button">View</ShimmerBtn>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </section>
  );
}
