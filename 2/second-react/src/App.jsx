import React, { Component } from 'react';
import Header from './Components/Header';
import TextContent from './Components/TextContent';
import Buttons from './Components/Buttons';
import Popular from './Components/Popular';
import ImageContent from './Components/ImageContent';
import Years from './Components/Years';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './pages/About';
// import Home from './pages/Home';
import Contact from './pages/Contact';
import Price from './pages/Price';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header
          date="Friday July 8th"
          isLogin={true}
          userAvatar="/Ellipse 2.png"
          ></Header>
          <Routes>
            <Route path='/' element= {
              <>
                <TextContent 
                genre={["Drama", "Thriller", "Supernatural"]}
                title="Stranger Things"
                director="Shawn Levy"
                seasons="3 (5 Episodes)"
                description="In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries."
                year="2019"
                ></TextContent>
                <Buttons></Buttons>
                <Popular></Popular>
                <ImageContent></ImageContent>
                <Years></Years>
              </>
            }/>
            <Route path="/about" element={<About/>}/>
            <Route path="/price" element={<Price/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;