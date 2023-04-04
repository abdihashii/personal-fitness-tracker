import { atom, useAtom } from "jotai";
// import { NewWorkoutDayForm } from "~/components/steps/newWorkoutDayForm";
// import { NewWarmupForm } from "~/components/newWarmupForm";
// import { NewWorkoutGroupForm } from "~/components/newWorkoutGroupForm";
// import { Success } from "~/components/steps/success";
import Layout from "~/components/layout";
import { AddNewWorkoutForm } from "~/components/addNewWorkoutForm";

const stepAtom = atom(1);

const NewWorkout = () => {
  const [step, setStep] = useAtom(stepAtom);
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  // switch (step) {
  //   case 1:
  //     return <NewWorkoutDayForm {...{ nextStep }} />;
  //   case 2:
  //     return <NewWarmupForm {...{ nextStep, prevStep }} />;
  //   case 3:
  //     return <NewWorkoutGroupForm {...{ nextStep, prevStep }} />;
  //   case 4:
  //     return <Success {...{ nextStep, prevStep }} />;
  //   default:
  //     console.log("default");
  // }

  return (
    <Layout>
      <AddNewWorkoutForm />
    </Layout>
  );
};

export default NewWorkout;
