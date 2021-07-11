import { useState } from "react";
import "./App.css";
import Nav from "./Nav";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="App">
      <Nav />
    </div>
  );
}

export default App;
