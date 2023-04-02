import { atom, useAtom } from "jotai";
import { NewWorkoutDayForm } from "~/components/newWorkoutDayForm";
import { NewWarmupForm } from "~/components/newWarmupForm";
import { NewWorkoutGroupForm } from "~/components/newWorkoutGroupForm";

const stepAtom = atom(1);

const NewWorkout = () => {
  const [step, setStep] = useAtom(stepAtom);
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  switch (step) {
    case 1:
      return <NewWorkoutDayForm {...{ nextStep }} />;
    case 2:
      return <NewWarmupForm {...{ nextStep, prevStep }} />;
    case 3:
      return <NewWorkoutGroupForm {...{ nextStep, prevStep }} />;
    default:
      console.log("default");
  }
};

export default NewWorkout;
