import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import NotFound from "./pages/NotFound";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path=":id" element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
