import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Register } from "../screens/Register";
import { Home } from "../screens/Home";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}
