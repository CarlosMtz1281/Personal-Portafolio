import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { NavBar } from './Components/NavBar';
import Banner from './Components/Banner';
import Banner2 from './Components/Banner2';
import Skills from './Components/Skills';
import Projects from './Components/projects';
import Footer from './Components/Footer';
import MobileV from './Components/Mobilev';



function App() {

   const getWindowDimension = () => {
    const width = window.innerWidth
              || document.documentElement.clientWidth
              || document.body.clientWidth;
    const height = window.innerHeight
              || document.documentElement.clientHeight
              || document.body.clientHeight;
    console.log(width,height)

    if (width < 450 ){
      return mobileV()
    }else{
      return desktopV()
    }
    };

    function mobileV(){
      return(
        <MobileV/>
      )
    }

    function desktopV(){

      return(
        <div>
          <NavBar/>
          <Banner2/>
          <Skills/>
          <Projects/>
          <Footer/>
       </div>
      )
    }

  return (
    <div className="App">
      {getWindowDimension()}



    </div>
  );
}

/*
<Skills/>
      <Projects/>

*/

export default App;
