import React, { Component } from "react";
import NavBar from "./components/NavBar";
class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container" />
      </React.Fragment>
    );
  }
}

export default App;
