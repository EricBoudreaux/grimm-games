

import { Route, Routes } from 'react-router-dom';

import Navbar from './Components/Navbar';

import 'animate.css';


import Home from "./Pages/Home";
import Games from './Pages/Games';
import About from './Pages/About';

import Blog from './Pages/Blog';

import Contact from './Pages/Contact';
import BlogPost1 from './Pages/BlogPost1';




function App() {
  return (
    <>
    <Navbar />
      <Routes>

       <Route path='/' element={<Home />} />
       <Route path='/about' element={<About />} />

       <Route path='/games' element={<Games />} />
       <Route path='/blog' element={<Blog />} />
       <Route path='/blogPost1' element={<BlogPost1 />} />

       <Route path='/contact' element={<Contact />} />
      </Routes>

    </>
  );
}

export default App;
