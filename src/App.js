import React, { Component } from "react";
import NavBar from "./components/NavBar";
import PostBlock from './components/PostBlock';
class App extends Component {
  state = {};
  render() {
    let containerStyle = {
      margin: '0 auto',
      width: '80%'
    }
    return (
      <React.Fragment>
        <NavBar />
        <div className="container" style={containerStyle} >
        <PostBlock/>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
