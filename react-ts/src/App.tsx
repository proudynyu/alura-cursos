import { Form } from "./components/Form";
import { List } from "./components/List";

function App() {
  return (
    <div className="container">
      <div className="form-container">
        <Form />
        <List />
      </div>
      <div className="timer"></div>
    </div>
  );
}

export default App;
