import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

function Footer() {
  const footerStyle = {
    backgroundColor:'D2B48C',
    color:'#8B4513',
    textAlign:'center',
    padding:'20px',
    marginTop:'auto',
    boxShadow:'0 -2px 4px rgba(0,0,0,0.1)'
  };
  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} Sweet Scents Candles. All rights reserved.</p>
    </footer>
  );
}

function App() {
  const appContainerStyle = {
    display:'flex',
    flexDirection:'column',
    minHeight:'100vh'
  };

  return (
    <Router>
      <div style={appContainerStyle}>
        <Navbar />
        <main style={{ flexGrow:'1' }}>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;