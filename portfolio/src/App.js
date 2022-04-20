//import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';
import About from './components/About';
import Works from './components/Works';
import './index.css'

function App() {
  return (
    <div className='smooth-scroll md:scroll-auto'>
      <Jumbotron />
      <About />
      <Works />
    </div>
  );
}

export default App;
