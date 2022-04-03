import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
