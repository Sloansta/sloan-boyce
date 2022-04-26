//import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';
import './index.css'

function App() {
  return (
    <div className='smooth-scroll md:scroll-auto overflow-y-hidden'>
      <Jumbotron />
      <About />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
