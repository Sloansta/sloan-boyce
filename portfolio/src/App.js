//import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';
import './index.css'

function App() {
  return (
    <div className='py-0 my-0 smooth-scroll overflow-hidden w-full h-full overflow-x-hidden md:scroll-auto'>
      <Jumbotron />
      <About />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
