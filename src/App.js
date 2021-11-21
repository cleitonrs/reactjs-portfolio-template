import './App.css';
import Home from './components/Home/Home'
import About from './components/About/About';
import Service from './components/Service/Service';
import Project from './components/Project/Project';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Service />
      <Project />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
