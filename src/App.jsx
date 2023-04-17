import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Characters from "./Pages/Characters";
import Stash from "./Pages/Stash";
import Calculator from "./Pages/Calculator";
import Success from "./Pages/Success";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/stash" element={<Stash />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
