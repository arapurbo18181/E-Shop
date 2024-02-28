import { Carousel } from "@material-tailwind/react";
import React from "react";
import { ShimmerBtn } from "../ui";

interface CarouselWithContentProps {}

export const CarouselWithContent: React.FC<CarouselWithContentProps> = () => {
  return (
    <Carousel
      placeholder={""}
      loop={true}
      autoplay={true}
      autoplayDelay={3000}
      className="rounded-xl"
    >
      <div className="pb-4 w-full rounded-lg shadow-lg bg-gray-50">
        <a className="block relative h-60 rounded overflow-hidden">
          <img
            alt="Web development"
            className="object-cover object-center w-full h-full hover:scale-110 transition-all duration-300"
            // src="https://i.pinimg.com/originals/e2/af/bc/e2afbcf69e3ca5fae84905ae24d7aea9.jpg"
            src="/src/assets/product1.jpg"
          />
        </a>
        <div className="flex justify-between items-center my-2 px-4">
          <div className="">
            <h2 className="text-gray-900 title-font text-lg font-medium">
              Camera
            </h2>
            <div className="flex justify-start items-end space-x-1">
              <p className="text-red-600 font-semibold text-lg">$450</p>
              <p className="text-sm line-through">$600</p>
            </div>
          </div>
          <div>
            <ShimmerBtn type="button">View</ShimmerBtn>
          </div>
        </div>
      </div>
      <div className="pb-4 w-full rounded-lg shadow-lg bg-gray-50">
        <a className="block relative h-60 rounded overflow-hidden">
          <img
            alt="Software development"
            className="object-cover object-center w-full h-full hover:scale-110 transition-all duration-300"
            src="/src/assets/product2.jpg"
          />
        </a>
        <div className="flex justify-between items-center my-2 px-4">
          <div className="">
            <h2 className="text-gray-900 title-font text-lg font-medium">
              Watch
            </h2>
            <div className="flex justify-start items-end space-x-1">
              <p className="text-red-600 font-semibold text-lg">$450</p>
              <p className="text-sm line-through">$600</p>
            </div>
          </div>
          <div>
            <ShimmerBtn type="button">View</ShimmerBtn>
          </div>
        </div>
      </div>
      <div className="pb-4 w-full rounded-lg shadow-lg bg-gray-50">
        <a className="block relative h-60 rounded overflow-hidden">
          <img
            alt="UI/UX Design"
            className="object-cover object-center w-full h-full hover:scale-110 transition-all duration-300"
            src="/src/assets/product3.webp"
          />
        </a>
        <div className="flex justify-between items-center my-2 px-4">
          <div className="">
            <h2 className="text-gray-900 title-font text-lg font-medium">
              Moisturizer
            </h2>
            <div className="flex justify-start items-end space-x-1">
              <p className="text-red-600 font-semibold text-lg">$450</p>
              <p className="text-sm line-through">$600</p>
            </div>
          </div>
          <div>
            <ShimmerBtn type="button">View</ShimmerBtn>
          </div>
        </div>
      </div>
    </Carousel>
  );
};
