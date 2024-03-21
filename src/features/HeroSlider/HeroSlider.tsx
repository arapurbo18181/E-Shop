import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SliderImage1 from "../../assets/slider1.jpg";
import SliderImage2 from "../../assets/slider2.jpg";
import SliderImage3 from "../../assets/slider3.jpeg";
import { ShimmerBtn } from "../../components/ui";
import { scrollToTop } from "../../utils";
import { ImagesSlider } from "./images-slider";

export function HeroSlider() {
  const images = [SliderImage1, SliderImage2, SliderImage3];
  return (
    <ImagesSlider className="h-screen" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-white bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          The hero section slideshow
        </motion.p>
        <Link to={"/shop"} onClick={scrollToTop}>
          <ShimmerBtn type="button">
            <span>Shop now →</span>
          </ShimmerBtn>
        </Link>
      </motion.div>
    </ImagesSlider>
  );
}
