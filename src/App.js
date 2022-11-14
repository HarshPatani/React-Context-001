import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import ThemeContext from "./Context";
import { useState } from "react";

function App() {
  const [isLight, setIsLight] = useState(true);
  const changeTheme = () => {
    setIsLight((prevValue) => {
      return !prevValue;
    });
  };
  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ isLight, changeTheme }}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
          </Routes>
        </div>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
