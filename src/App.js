

import { Route, Routes } from 'react-router-dom';

import Navbar from './Components/Navbar';

import 'animate.css';


import Home from "./Pages/Home";
import Games from './Pages/Games';
import About from './Pages/About';

import Blog from './Pages/Blog';

import Contact from './Pages/Contact';




function App() {
  return (
    <>
    <Navbar />
      <Routes>

       <Route path='/' element={<Home />} />
       <Route path='/about' element={<About />} />

       <Route path='/games' element={<Games />} />
       <Route path='/blog' element={<Blog />} />

       <Route path='/contact' element={<Contact />} />
      </Routes>

    </>
  );
}

export default App;
