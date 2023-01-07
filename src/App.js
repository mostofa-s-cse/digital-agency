import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';

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
