import { useContext } from "react";
import { HandPalm, Play } from "phosphor-react";

import { Countdown } from "./components/Countdown";
import { FormProvider, useForm } from "react-hook-form";
import { NewCycleForm } from "./components/NewCycleForm";
import { CyclesContext } from "../../context/CyclesContext";

import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from "./styles";

interface NewCycleFormData {
  task: string;
  minutesAmount: number;
}

export const Home = () => {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext);

  const newCycleForm = useForm<NewCycleFormData>({
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  const { handleSubmit, watch, reset } = newCycleForm;

  const task = watch("task");
  const isSubmitDisabled = !task;

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data);
    reset();
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <StopCountdownButton
            type="button"
            onClick={() => interruptCurrentCycle()}
          >
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
            <Play size={24} />
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  );
};
