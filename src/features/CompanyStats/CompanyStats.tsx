import { useScrollTrigger } from "@material-ui/core";
import React, { useState } from "react";
import CountUp from "react-countup";

export const Stats: React.FC = () => {
  const [countOn] = useState(true);
  const trigger = useScrollTrigger();

  return (
    <section className="text-gray-800 body-font text-center space-y-10">
      <div className="flex flex-col text-center w-full space-y-5">
        <h2 className="text-3xl font-bold">
          <span className="">E-Shop </span>
          <span className="underline underline-offset-8 text-red-600">
            Facts
          </span>
        </h2>
      </div>
      <div className="container px-5 mx-auto">
        <div
          className={`flex flex-wrap -m-4 text-center divide-x-2 divide-gray-800 ${
            trigger ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="p-4 sm:w-1/3 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-800">
              {countOn && (
                <CountUp start={0} end={200} duration={2} delay={0.1} />
              )}
              +
            </h2>
            <p className="leading-relaxed">New Customers Per Month</p>
          </div>
          <div className="p-4 sm:w-1/3 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-800">
              {countOn && (
                <CountUp start={0} end={20000} duration={2} delay={0.1} />
              )}
              +
            </h2>
            <p className="leading-relaxed">Happy Customers</p>
          </div>
          <div className="p-4 sm:w-1/3 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-800">
              {countOn && (
                <CountUp start={0} end={79} duration={2} delay={0.1} />
              )}
              %
            </h2>
            <p className="leading-relaxed">Return Customers</p>
          </div>
        </div>
      </div>
    </section>
  );
};
