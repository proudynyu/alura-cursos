import { Form } from "./components/Form";
import { List } from "./components/List";
import { Timer } from "./components/Timer";
import { ItemContextProvider } from "./context/item-context";

function App() {
  return (
    <ItemContextProvider>
      <div className="container">
        <h1>Estudos do dia</h1>
        <div className="form-container">
          <Form />
          <List />
        </div>
        <Timer />
      </div>
    </ItemContextProvider>
  );
}

export default App;
