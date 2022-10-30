import { useRef } from "react";
import { useItemContext } from "../../context/item-context";
import { Button } from "../Button";
import { Input } from "../Input";

import "./styles.scss";

export const Form = () => {
  const { handleAddItem, items } = useItemContext();

  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputTimeRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const title = inputNameRef.current?.value;
    const time = inputTimeRef.current?.value;

    if (!title || !time) return;

    handleAddItem({
      id: items.length + 1,
      time,
      title,
    });

    console.log(items)
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
