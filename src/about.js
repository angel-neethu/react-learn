import React from "react";
import Themebutton from "./themebutton";
class About extends React.Component {
  render() {
    const propsData = this.props.value;
    return (
      <div>
        <h1>About</h1>
        Name : {propsData.name}
        <div> Dept : {propsData.dept}</div>
        <div> Company : {propsData.company}</div>
        <Themebutton></Themebutton>
      </div>
    );
  }
}

export default About;
