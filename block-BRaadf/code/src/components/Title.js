import React, { Component } from "react";
import { ThemeContext } from "./ThemeContext";

export default class Title extends Component {
  static contextType = ThemeContext;

  render() {
    const { isDarkMode } = this.context.state;

    return (
      <h2
        className={`heading ${
          isDarkMode ? "sub-heading-dark" : "sub-heading-light"
        }`}
      >
        {this.props.text}
      </h2>
    );
  }
}
