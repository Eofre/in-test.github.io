import { useState } from "react";
import "./App.scss";
import AppRouter from "./components/AppRouter";
import Header from "./components/header/Header";
import DB from "./server/db.json";

function App() {
  const [tests, setTests] = useState(DB.tests);
  return (
    <div className="App">
      <Header />
      <AppRouter tests={tests} />
    </div>
  );
}

export default App;
