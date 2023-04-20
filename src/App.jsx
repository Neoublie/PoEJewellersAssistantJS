import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Characters from "./Pages/Characters";
import Stash from "./Pages/Stash";
import Calculator from "./Pages/Calculator";
import Success from "./Pages/Success";
import NotFound from "./Pages/NotFound";
import Debug from "./Pages/Debug";
import Leagues from "./Pages/Leagues";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/leagues" element={<Leagues />} />
          <Route path="/stash" element={<Stash />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/success" element={<Success />} />
          <Route path="/debug" element={<Debug />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
