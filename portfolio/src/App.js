//import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';
import About from './components/About';
import './index.css'

function App() {
  return (
    <div className='smooth-scroll md:scroll-auto'>
      <Jumbotron />
      <About />
    </div>
  );
}

export default App;
