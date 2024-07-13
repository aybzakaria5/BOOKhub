// Import necessary modules and components
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './Main_component/Main';
import Home from './Home/Home';
import About from './About/About';
import Catalogue from './Catalogue/Catalogue';
import Books from './Catalogue/Categorie/Books/Books';
import Contact from './Contact/Contact';
import Sign from './Sign/Sign';
import Add from './Add_book/Add';

import Admin from './Admin/Admin';
import Main from './Admin/Main_compenent/Main';



function App() {
  return (
    <Router>
      <Routes>

        {/* Main Layout Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="catalogue" element={<Catalogue />} />
          <Route path="books/:category" element={<Books />} />
          <Route path="contact" element={<Contact />} />
          <Route path="sign" element={<Sign />} />
          <Route path="addBook" element={<Add />} />
        </Route>

        <Route path="/admin" element={<Main/>}>
          <Route index element={<Admin />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
