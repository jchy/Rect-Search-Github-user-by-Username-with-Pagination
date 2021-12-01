import "./styles.css";
import { useEffect } from "react";

const Title = () => {
  console.log(3);
  useEffect(() => {
    console.log(4);
  }, []);
  console.log(5);
  return <h3>Jaswant</h3>;
};

export default function App() {
  console.log(1);
  useEffect(() => {
    console.log("useEffect");
  }, []);
  console.log(2);
  return (
    <div className="App">
      <Title />
      <h3> Loading and error concept </h3>
    </div>
  );
}
