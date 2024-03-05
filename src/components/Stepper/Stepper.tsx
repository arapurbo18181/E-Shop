import { Button, Step, Stepper } from "@material-tailwind/react";
import React from "react";
import { CartCom, Checkout, CheckoutComplete } from "..";

export function DefaultStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <div className="w-full py-4 px-8">
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
      {activeStep === 0 && <CartCom handleNext={handleNext} />}
      {activeStep === 1 && <Checkout handleNext={handleNext} />}
      {activeStep === 2 && <CheckoutComplete />}
      <div className="mt-16 flex justify-between">
        <Button placeholder={""} onClick={handlePrev} disabled={isFirstStep}>
          Prev
        </Button>
      </div>
    </div>
  );
}
