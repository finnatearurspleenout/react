import React, { Component } from 'react';
import Header from './Components/Header';
import TextContent from './Components/TextContent';
import Buttons from './Components/Buttons';
import Popular from './Components/Popular';
import ImageContent from './Components/ImageContent';
import Years from './Components/Years';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

class App extends Component {
  render() {
    return (
      <div>
        <Header
        date="Friday July 8th"
        isLogin={true}
        userAvatar="/Ellipse 2.png"
        ></Header>
        <TextContent 
        genre="Drama | Thriller | Supernatural"
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
      </div>
    );
  }
}

export default App;