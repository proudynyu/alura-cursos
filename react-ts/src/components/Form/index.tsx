import { Button } from "../Button";
import { Input } from "../Input";

export const Form = () => {
  return (
    <form>
      <Input
        type="text"
        name="task"
        id="task"
        placeholder="O que você quer estudar"
        required
        labelText="Adicione um novo estudo"
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
      />

      <Button title="Submit" />
    </form>
  );
};
