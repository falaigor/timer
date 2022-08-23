import { useState, useEffect, createContext } from "react";
import { HandPalm, Play } from "phosphor-react";

import { Countdown } from "./components/Countdown";
import { NewCycleForm } from "./components/NewCycleForm";

import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from "./styles";

interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

interface CyclesContextData {
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  markCurrentCycleAsFinished: () => void;
}

export const CycleContext = createContext({} as CyclesContextData);

export const Home = () => {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  function markCurrentCycleAsFinished() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() };
        } else {
          return cycle;
        }
      })
    );
  }

  // const task = watch("task");
  // const isSubmitDisabled = !task

  // function handleCreateNewCycle(data: NewCycleFormData) {
  //   const id = String(new Date().getTime());

  //   const newCycle: Cycle = {
  //     id,
  //     task: data.task,
  //     minutesAmount: data.minutesAmount,
  //     startDate: new Date(),
  //   };

  //   setCycles((state) => [...state, newCycle]);
  //   setActiveCycleId(id);
  //   setAmountSecondsPassed(0);

  //   reset();
  // }

  // function handleInterruptCycle() {
  //   setCycles((state) =>
  //     state.map((cycle) => {
  //       if (cycle.id === activeCycleId) {
  //         return { ...cycle, interruptedDate: new Date() };
  //       } else {
  //         return cycle;
  //       }
  //     })
  //   );

  //   setActiveCycleId(null);
  // }

  return (
    <CycleContext.Provider
      value={{ activeCycle, activeCycleId, markCurrentCycleAsFinished }}
    >
      <HomeContainer>
        <form /* onSubmit={handleSubmit(handleCreateNewCycle)} */ action="">
          {/* <NewCycleForm /> */}
          <Countdown />

          {activeCycle ? (
            <StopCountdownButton
              type="button"
              // onClick={() => handleInterruptCycle()}
            >
              <HandPalm size={24} />
              Interromper
            </StopCountdownButton>
          ) : (
            <StartCountdownButton type="submit">
              <Play size={24} />
              Começar
            </StartCountdownButton>
          )}
        </form>
      </HomeContainer>
    </CycleContext.Provider>
  );
};
