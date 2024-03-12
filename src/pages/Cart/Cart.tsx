import { Button, Step, Stepper } from "@material-tailwind/react";
import { useState } from "react";
import { CartItems, Checkout } from "../../features";
import { MainLayout } from "../../layouts";
import { CheckoutComplete } from "./CheckoutComplete";

const Cart = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <MainLayout className="w-full py-4 px-8 mt-20">
      <Stepper
        placeholder={""}
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
        <Step placeholder={""}>1</Step>
        <Step placeholder={""}>2</Step>
        <Step placeholder={""}>3</Step>
      </Stepper>
      {activeStep === 0 && <CartItems handleNext={handleNext} />}
      {activeStep === 1 && <Checkout handleNext={handleNext} />}
      {activeStep === 2 && <CheckoutComplete />}
      <div className="mt-16 flex justify-between">
        <Button placeholder={""} onClick={handlePrev} disabled={isFirstStep}>
          Prev
        </Button>
      </div>
    </MainLayout>
  );
};

export default Cart;
