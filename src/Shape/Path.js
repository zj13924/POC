import React from "react";
import ReactDOM from "react-dom";
import * as d3 from "d3";

import { makeDProperty, makeDPropertyFromObj } from "../Controller/Util";

class Path extends React.Component {
  me;
  from;
  to;
  constructor(props) {
    super(props);
    this.state = {
      x0: 0,
      y0: 0,
      x1: 100,
      y1: 100,
      x2: 200,
      y2: 200,
      x3: 0,
      y3: 0,
    };
  }
  componentDidMount() {
    this.me = d3.select(ReactDOM.findDOMNode(this));

    var this_ = this;
    const handleDrag = d3.drag().on("drag", function (event) {
      let x1 = Number(this_.state.x1) + event.dx;
      let y1 = Number(this_.state.y1) + event.dy;
      this_.setState({ x1: x1, y1: y1 });
    });
    handleDrag(this.me);
    //this.me.call(handleDrag);

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
    //var x0, y0, x1, y1, x2, y2, x3, y3;
    if (this.from) {
      const fromCenter = this.from.datum().center;
      /////this.me.attr("x0", fromCenter[0]);
      /////this.me.attr("y0", fromCenter[1]);
      //x0 = fromCenter[0];
      //y0 = fromCenter[1];
      this.setState({ x0: fromCenter[0], y0: fromCenter[1] });
    }
    if (this.to) {
      const toCenter = this.to.datum().center;
      /////this.me.attr("x3", toCenter[0]);
      /////this.me.attr("y3", toCenter[1]);
      //x3 = toCenter[0];
      //y3 = toCenter[1];
      this.setState({ x3: toCenter[0], y3: toCenter[1] });
    }

    /////this.me.attr("x1", 100);
    /////this.me.attr("y1", 100);
    /////this.me.attr("x2", 200);
    /////this.me.attr("y2", 200);

    //this.setState({ x1: 100, y1: 100, x2: 200, y2: 200 });

    /*
    x1 = 100;
    y1 = 100;
    x2 = 200;
    y2 = 200;
    this.me.attr("d", makeDProperty(x0, y0, x1, y1, x2, y2, x3, y3));
    */
  }
  render() {
    const { from, to, ...remainingProps } = this.props;
    return <path {...remainingProps} d={makeDPropertyFromObj(this.state)} />;
  }
}
export default Path;
