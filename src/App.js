import { Link, Route, Routes, useNavigate } from "react-router-dom";
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from "./components/Login/Login";
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="middleBody">
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
