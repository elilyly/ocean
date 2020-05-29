import {BrowserRouter, Route} from 'react-router-dom';
import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Info from './Info';
import Home from './Home';
import Resume from './Resume';
import Carousel from './Carousel';

import img1 from  './Images/img1.jpg';
import img2 from  './Images/img2.jpg';
import img3 from  './Images/img3.jpg';
import img4 from  './Images/img4.jpg';
import img5 from  './Images/img5.jpeg';
import img6 from  './Images/img6.JPG';
import img7 from  './Images/img7.JPG';
import img8 from  './Images/img8.JPG';
import img9 from  './Images/img9.JPG';
import img10 from  './Images/img10.jpg';
import img11 from  './Images/img11.JPG';
import img12 from  './Images/img12.PNG';
import img13 from  './Images/img13.PNG';
import tree from  './Images/tree.jpg';
import gifGrass from  './Images/gifGrass.GIF';

const App = () => {
  const carouselImg = [
    {
      src: `${img1}`
    },{
      src: `${img2}`
    },{
      src: `${img3}`
    },{
        src: `${img4}`
    },{
      src: `${img5}`
    },{
      src: `${img5}`
    },{
      src: `${img6}`
    },{
      src: `${img7}`
    },{
      src: `${img8}`
    },{
      src: `${img9}`
    },{
      src: `${img10}`
    },{
      src: `${img11}`
    },{
      src: `${img12}`
    },{
      src: `${img13}`
    },{
      src: `${tree}`
    },{
      src: `${gifGrass}`
    }]

  return (
    <BrowserRouter>
      <div className="main-app">
        <Navbar  />
        <Route exact path="/" render={ () => <Home/>}/>
        <Route path="/info" render={ () => <Info/>}/>
        <Route path="/resume" render={ () => <Resume/>}/>
        <Route path="/misc" render={ () => <Carousel initialStep={0} images={carouselImg} />}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
