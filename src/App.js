import "./App.css";
import Home from "./components/Home";
import Institute from "./components/Institute";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./containers/AdminLogin";
import About from "./containers/About.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/institute" element={<Institute />} />
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About/>} />
          <Route path="/admin-login" element={<AdminLogin/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
