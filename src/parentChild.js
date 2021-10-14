import React from "react";
import About from "./about";

const ThemeContext = React.createContext("light");

class ParentChild extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Angel",
      dept: "OS",
      company: "IBM",
    };
  }
  render() {
    return (
      <div>
        <ThemeContext.Provider value="dark">
          <About value={this.state}></About>
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default ParentChild;
