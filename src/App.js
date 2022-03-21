import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Start from "./Start";
import LevelStart from "./LevelStart";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/start" element={<Start />} />
          <Route path="/levelstart" element={<LevelStart />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;