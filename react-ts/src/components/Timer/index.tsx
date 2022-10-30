import { FC, useState } from "react";
import { useItemContext } from "../../context/item-context";
import { Button } from "../Button";
import { Clock } from "./Clock";

import "./styles.scss";

export const Timer: FC = () => {
  const { selectedItem } = useItemContext();
  const [start, setStart] = useState<boolean>(false);

  function handleStartTimer() {
    setStart(!start);
  }

  return (
    <div className="timer">
      <h2>Escolha um card para iniciar</h2>
      {selectedItem.title ? (
        <h3>
          Task selecionada: <span>{selectedItem.title}</span>
        </h3>
      ) : null}
      <Clock onTimerStart={start} />
      <Button title="Comerçar" onClick={handleStartTimer} />
    </div>
  );
};
