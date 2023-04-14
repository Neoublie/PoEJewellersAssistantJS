import { useState } from "react";
import "./App.css";
import Menu from "./Components/Menu";
import Header from "./Components/Header";
import Characters from "./Components/Characters";
import StashTab from "./Components/StashTab";

function App() {
  const [count, setCount] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="canvas">
      <div>
        <div>
          <Header />
        </div>
      </div>
      <div className="container">
        <Menu />
        {/* <Characters /> */}
        <StashTab />
      </div>
    </div>
  );
}

export default App;
