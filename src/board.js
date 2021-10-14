import React from "react";
import Square from "./square";
import Clock from "./clock";

class Board extends React.Component {
  renderSquare(i) {
    return <Square param={i} />;
  }

  formatUsername(param) {
    return param.name + " " + param.lname;
  }

  render() {
    const status = "Next player: X";
    const name = {
      name: "angel",
      lname: "neethu",
    };
    const userName = this.formatUsername(name);

    return (
      <div>
        <Clock />
        <div>{userName}</div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;
