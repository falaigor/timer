import { HistoryContainer, HistoryList, Status } from "./styles";
import { useContext } from "react";
import { CyclesContext } from "../../context/CyclesContext";

export const History = () => {
  const { cycles } = useContext(CyclesContext);

  return (
    <HistoryContainer>
      <h1>Meu Historico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duracao</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} minutos</td>
                  <td></td>
                  <td>
                    <Status statusColor="yellow">Em andamento</Status>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
};
