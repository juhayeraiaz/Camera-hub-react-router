import { Routes, Route, } from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import NotFound from './Components/NotFound/NotFound'
import Dashboard from './Components/Dashboard/Dashboard'
import Reviews from './Components/Reviews/Reviews'
import 'bootstrap/dist/css/bootstrap.min.css';
import Blogs from "./Components/Blogs/Blogs";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
