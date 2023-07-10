import React, { Component } from "react";
import { ThemeContext } from "./ThemeContext";

export default class Header extends Component {
  static contextType = ThemeContext;

  render() {
    const { isDarkMode } = this.context.state;

    return (
      <h1
        className={`heading ${isDarkMode ? "heading-dark" : "heading-light"}`}
      >
        {isDarkMode ? "Dark Mode" : "Light Mode"}
      </h1>
    );
  }
}
