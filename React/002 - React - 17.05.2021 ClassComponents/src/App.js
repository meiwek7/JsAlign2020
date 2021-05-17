import "./styles.css";
//import Component from "./components/Component";
import Test from "./components/ClassTest";
import FunctionalTest from "./components/Test";
import Task1 from "./components/Task1";
import Task2 from "./components/Task2";

export default function App() {
  return (
    <div className="App">
      <Test />
      <FunctionalTest />
      <Task1 />
      <Test text="i am text" />
      <Task2 a={5} b={10} />
    </div>
  );
}
