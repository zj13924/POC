import React from "react";
import ReactDOM from "react-dom";
import * as d3 from "d3";

class Line extends React.Component {
  me;
  from;
  to;
  componentDidMount() {
    this.me = d3.select(ReactDOM.findDOMNode(this));
    if (this.props.from) {
      this.from = d3.select("#" + this.props.from);
      if (this.from.empty()) {
        this.from = undefined;
      } else {
        this.from.on("moved.line-1", this.updatePosition.bind(this));
      }
    }
    if (this.props.to) {
      this.to = d3.select("#" + this.props.to);
      if (this.to.empty()) {
        this.to = undefined;
      } else {
        this.to.on("moved.line-1", this.updatePosition.bind(this));
      }
    }
    this.updatePosition();
  }
  updatePosition() {
    if (this.from) {
      const fromCenter = this.from.datum().center;
      this.me.attr("x1", fromCenter[0]);
      this.me.attr("y1", fromCenter[1]);
    }
    if (this.to) {
      const toCenter = this.to.datum().center;
      this.me.attr("x2", toCenter[0]);
      this.me.attr("y2", toCenter[1]);
    }
  }
  render() {
    const { from, to, ...remainingProps } = this.props;
    return <line {...remainingProps} />;
  }
}
export default Line;
