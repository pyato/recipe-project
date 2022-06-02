import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Search from './components/Search';
import Popular from './components/Popular';
import Weekly from './components/Weekly';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <div className="container">
        <Navbar /> 
      </div>
      <Banner />
      <div className="content-con">
        <Search />
        <Popular />
        <Weekly />
        <About />        
      </div>
      <Footer />
    </div>

  );
}

export default App;
