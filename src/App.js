import React from "react";
import useStyles from "./styles/headers.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Frame from "./components/Frame";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Frame />}>
          <Route path="/" element={<Home />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}
