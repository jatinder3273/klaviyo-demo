import "./App.css";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState();
  const onSubmit = () => {
    const _learnq = window._learnq || [];
    _learnq.push([
      "identify",
      {
        $email: email,
      },
    ]);
    console.log("====================================");
    console.log(_learnq, "_learnq");
    console.log("====================================");
  };

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
        <button onClick={onSubmit}>Submit</button>
      </header>
    </div>
  );
}

export default App;
