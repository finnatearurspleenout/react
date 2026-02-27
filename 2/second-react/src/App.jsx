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
        <Header></Header>
        <TextContent></TextContent>
        <Buttons></Buttons>
        <Popular></Popular>
        <ImageContent></ImageContent>
        <Years></Years>
      </div>
    );
  }
}

export default App;