import { useRef } from "react";
import { v4 } from 'uuid'

import { useItemContext } from "../../context/item-context";
import { Button } from "../Button";
import { Input } from "../Input";
import "./styles.scss";

/**
 * @export
 * @description Component that handles the HTML Form to add more tasks
 * @version 1.0.0
 */
export const Form = () => {
  const { handleAddItem } = useItemContext();

  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputTimeRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const title = inputNameRef.current?.value;
    const time = inputTimeRef.current?.value;

    if (!title || !time) return;

    handleAddItem({
      id: v4(),
      time,
      title,
      completed: false
    });

    inputNameRef.current.value = "";
    inputTimeRef.current.value = "";
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Timer</h2>
      <Input
        type="text"
        name="task"
        id="task"
        placeholder="O que você quer estudar"
        required
        labelText="Adicione um novo estudo"
        ref={inputNameRef}
      />
      <Input
        type="time"
        step="1"
        name="time"
        id="time"
        min="00:00:00"
        max="01:30:00"
        required
        labelText="Tempo"
        ref={inputTimeRef}
      />

      <Button title="Submit" />
    </form>
  );
};
