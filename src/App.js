import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import NavBar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import './App.css';


function App() {

  //for clicked links to scroll to top position of each page component on load
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0,0);
  }, [location]);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
