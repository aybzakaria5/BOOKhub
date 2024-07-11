import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './Main_component/Main';
import Home from './Home/Home';
import About from './About/About';
import Catalogue from './Catalogue/Catalogue';
import Books from './Catalogue/Categorie/Books/Books';
import Contact from './Contact/Contact';
import Sign from './Sign/Sign';
import Add from './Add_book/Add';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="catalogue" element={<Catalogue />} />
          <Route path="books/:category" element={<Books />} />
          <Route path="contact" element={<Contact />} />
          <Route path="sign" element={<Sign/>} />
          <Route path="addBook" element={<Add/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
