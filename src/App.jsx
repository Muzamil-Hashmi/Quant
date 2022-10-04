import logo from './logo.svg';
// import './App.css';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Base from './components/layout/Base';
import Home from './pages/Home';
import Section from './components/element/Section';
import Tooken from './components/element/Tooken';
import AOS from 'aos';
import 'aos/dist/aos.css';




function App() {
  AOS.init({
    duration:1400,
  });
  return (
   <BrowserRouter>
   <Base>
   <Routes>
    <Route  index path='/'  element={<Home/>}/>
  

   </Routes>
   </Base>

   </BrowserRouter>
  );
}

export default App;
