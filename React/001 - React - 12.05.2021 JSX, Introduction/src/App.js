import "./styles.css";
import Test from "./components/Test";
import Weather from "./components/Weather";
import Person from "./components/Person";
import List from "./components/List";

let arr = [1, 2, 3, 4, 5];
let objectArray = [
  { name: "john", age: 25 },
  { name: "ivan", age: 33 },
  { name: "kenny", age: 22 }
];

export default function App() {
  return (
    <div className="App">
      <List arr={arr} />
      <Person transferedArray={objectArray} />
    </div>
  );
}
