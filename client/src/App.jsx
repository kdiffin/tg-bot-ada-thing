import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="bg-zinc-800 text-white min-h-screen">
      <h1 className="text-[500px] ">hi guys</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
