import React from "react";
import SwitchButton from "./Button";
import Header from "./Header";
import Main from "./Main";
import { ThemeContext } from "./ThemeContext";

class App extends React.Component {
  state = {
    isDarkMode: false,
  };

  changeMode = () => {
    this.setState((state) => {
      return { isDarkMode: !state.isDarkMode };
    });
  };

  render() {
    let { isDarkMode } = this.state;
    return (
      <ThemeContext.Provider
        value={{ state: this.state, changeMode: this.changeMode }}
      >
        <div className={`bg ${isDarkMode ? "bg-dark" : "bg-light"}`}>
          <Header />
          <Main />
          <SwitchButton />
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
