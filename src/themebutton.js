import React from "react";

const ThemeContext = React.createContext("light");
class Themebutton extends React.Component {
  static contextType = ThemeContext;
  render() {
    return <button>{this.context}</button>;
  }
}
export default Themebutton;
