import React from "react";
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) => (
      <li key={number.toString()}>{number * 2}</li>
    ));

    return (
      <>
        <ul>{listItems}</ul>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? "ON" : "OFF"}
        </button>
        <Greeting value={this.state.isToogleOn} />
      </>
    );
  }
}

function Greeting(props) {
  const grett = props;

  if (grett) {
    return <UserGreetings />;
  } else {
    return <GuestFreetings />;
  }
}

function UserGreetings() {
  return <h1>Hello Angel</h1>;
}

function GuestFreetings() {
  return <h1>Hello Guest</h1>;
}

export default Form;
