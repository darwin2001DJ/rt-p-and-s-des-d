import React, { Component } from "react";
import CollegeDetails from "./CollegeDetails";
import "./App.css";
class App extends Component {
  constructor() {}
  render = () => {
    const { collegeData } = this.state;
    return (
      <div>
        <h1 className="header">Ebox Colleges</h1>
      </div>
    );
  };
}
export default App;
