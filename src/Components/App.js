import '../App.css';
import Home from './Home';
import Header from './Header';
import About from './About'
import Portfolio from './Portfolio'
import { Route, Routes } from "react-router";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
