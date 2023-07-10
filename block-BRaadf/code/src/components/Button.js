import React, { Component } from "react";
import { ThemeContext } from "./ThemeContext";

export default class SwitchButton extends Component {
  static contextType = ThemeContext;
  render() {
    const { state, changeMode } = this.context;

    return (
      <button
        className={`btn ${state.isDarkMode ? "btn-dark" : "btn-light"}`}
        onClick={changeMode}
      >
        {state.isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    );
  }
}
