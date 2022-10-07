import { useState } from "react";
import "./App.scss";
import AppRouter from "./components/AppRouter";
import Header from "./components/header/Header";
import Modal from "./components/UI/modal/Modal";
import DB from "./server/db.json";

function App() {
  const [tests, setTests] = useState(DB.tests);

  const addTest = (test) => {
    setTests([...tests, test]);
  };

  return (
    <div className="App">
      <Modal visible={true}>JJfdffdgdfg!!!!</Modal>
      <Header />
      <AppRouter tests={tests} addTest={addTest} />
    </div>
  );
}

export default App;
