import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {}, []);

  return <div className="App">{isLoading && <h3>Loading ...</h3>}</div>;
}
