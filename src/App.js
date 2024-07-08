import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Catalogue from './Catalogue/Catalogue';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/catalogue" element={<Catalogue />} />
      </Routes>
    </Router>
  );
}

export default App;
