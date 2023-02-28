import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { NavBar } from './Components/NavBar';
import Banner from './Components/Banner';
import Banner2 from './Components/Banner2';
import Skills from './Components/Skills';
import Projects from './Components/projects';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner2/>
      <Skills/>
      <Projects/>
      <Footer/>


    </div>
  );
}

/*
<Skills/>
      <Projects/>

*/

export default App;
