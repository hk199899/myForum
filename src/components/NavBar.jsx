import React, { Component } from "react";
import "../style/NavBar.css";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav>
        <ul>
          <li className= "nav-col logo">
            <a href="#">
              <i className="fas fa-dice-d6" />
            </a>
          </li>
          <li className= "nav-col" id="category">
            <select id="category-drop-down">
              <option value="">a</option>
              <option value="">a</option>
              <option value="">a</option>
              <option value="">a</option>
              <option value="">a</option>
            </select>
          </li>
          <li className= "nav-col" id="search-bar">
          <input id = "search-input" type = "text"
            placeholder="Search The World">
          </input>
            <i id = "search-icon" className="fas fa-search"></i>
          </li>
          <li className= "nav-col" id="category-icons-bar">
            <i className="fas fa-chart-line" />
            <i className="fas fa-chart-bar" />
            <i className="fas fa-closed-captioning" />
          </li>
          <li className= "nav-col" id="login-sign-section">
            <button className="button-bg-white-text-blue"> LogIn</button>
            <button className="button-bg-blue-text-white">Sign Up</button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
