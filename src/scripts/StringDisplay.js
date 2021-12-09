import React, { Component } from "react";
import debounce from "lodash.debounce";
import "../stylesheets/StringDisplay.css";

class StringDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lines: this.splitByLength(this.props.message, this.props.length),
      saved: true,
    };
  }

  splitByLength = (string, length) => {
    let lines = [];
    let currentLine = "";

    let words = string.split(" ");

    for (let i = 0; i < words.length; i++) {
      if (currentLine.length !== 0 && currentLine.length < length) {
        currentLine += " ";
      }

      if (currentLine.length + words[i].length > length) {
        lines.push(currentLine);
        currentLine = words[i];
      } else {
        currentLine += words[i];
      }
    }

    lines.push(currentLine);

    return lines;
  };

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
      .then((json) => console.log(json))
      .then(() => this.setState({ saved: true }));
  }, 2000);

  render() {
    return (
      <div>
        {this.renderSaveStatus()}
        {this.renderLines()}
      </div>
    );
  }

  renderSaveStatus() {
    return (
      <div className={this.state.saved ? "saved" : "saving"}>
        <p>{this.state.saved ? "Saved" : "Saving..."}</p>
      </div>
    );
  }

  renderLines() {
    return (
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
    );
  }
}

export default StringDisplay;
