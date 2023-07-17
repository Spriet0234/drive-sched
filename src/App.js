import logo from "./logo.svg";
import "./App.css";
import Component from "./component";
import Sched1 from "./sched1";
import Sched2 from "./sched2";
import Sched3 from "./sched3";

function App() {
  return (
    <div className="App">
      <Sched2 />
      <Sched1 />

      <Sched3 />
    </div>
  );
}

export default App;
