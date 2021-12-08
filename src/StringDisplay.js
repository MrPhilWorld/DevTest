import React, { Component } from "react";
import debounce from "lodash.debounce";
import "./StringDisplay.css";

const regex = /(.{1,80}\b|.{80})/g;

class StringDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lines: this.props.length.match(regex),
      saved: true,
    };
  }

  onDragOver = (e) => {
    e.preventDefault();
  };

  onDragStart = (e, id) => {
    e.dataTransfer.setData("id", id);
  };

  onDrop = (e, id) => {
    let draggedId = e.dataTransfer.getData("id");

    this.setState({
      lines: this.reorderLines(id, draggedId),
      saved: false,
    });

    this.updateDatabase();
  };

  reorderLines(id, draggedId) {
    var tempLines = this.state.lines;
    var draggedLine = tempLines[draggedId];
    tempLines[draggedId] = tempLines[id];
    tempLines[id] = draggedLine;

    return tempLines;
  }

  updateDatabase = debounce(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        body: this.state.lines,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

    this.setState({
      saved: true,
    });
  }, 2000);

  render() {
    return (
      <div>
        <div className={this.state.saved ? "saved" : "saving"}>
          <p>{this.state.saved ? "Saved" : "Saving..."}</p>
        </div>
        <div className="linesContainer">
          {this.state.lines.map((line, i) => (
            <div
              className="line"
              key={line}
              draggable
              onDragOver={(e) => this.onDragOver(e)}
              onDragStart={(e) => this.onDragStart(e, i)}
              onDrop={(e) => this.onDrop(e, i)}
            >
              {line}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default StringDisplay;
