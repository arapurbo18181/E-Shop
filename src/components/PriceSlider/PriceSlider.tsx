import { Slider } from "@material-tailwind/react";
import { useState } from "react";

export function PriceSlider() {
  const [Price, setPrice] = useState(100);
  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPrice(Math.round(Number(e.target.value)));
  };
  return (
    <>
      <h2>Price Range</h2>
      <div className="w-full flex justify-center items-center space-x-2">
        <span>0</span>
        <Slider
          placeholder={""}
          defaultValue={Price}
          value={Price}
          onChange={handleSubmit}
          min={0}
          max={100}
        />
        <span> {Price} </span>
      </div>
    </>
  );
}
