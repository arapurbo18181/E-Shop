import { Tilt } from "react-tilt";
import { CarouselWithContent } from "..";
import Sale from "../../assets/sale.jpg";

const defaultOptions = {
  reverse: false,
  max: 15,
  perspective: 1000,
  scale: 1,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};
export const Banner = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <Tilt options={defaultOptions} style={{ height: "70vh", width: "80vw" }}>
        <div className="relative flex justify-end items-center group rounded-xl overflow-hidden">
          <img src={Sale} alt="Banner" className="w-full" />
          {/* <button className="absolute py-2 px-4 rounded-lg bg-red-600 text-white hover:bg-red-400 transform group-hover:z-20 transition-transform duration-300 ease-in-out right-4">
            Submit
          </button> */}
          <div className="absolute right-10 max-w-lg">
            <CarouselWithContent />
          </div>
        </div>
      </Tilt>
    </div>
  );
};
