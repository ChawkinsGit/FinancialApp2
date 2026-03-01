import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Account from "./components/account";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
  );
}

export default App
