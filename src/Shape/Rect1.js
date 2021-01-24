import React from "react";
import ReactDOM from "react-dom";
import * as d3 from "d3";
import { makeDraggable1 } from "../Controller/Util";

class Rect1 extends React.Component {
  componentDidMount() {
    const me = d3.select(ReactDOM.findDOMNode(this));
    me.datum({
      translateX: 0,
      translateY: 0,
    });
    me.on("moved", () => {
      const centerX =
        this.props.x + this.props.width / 2 + me.datum().translateX;
      const centerY =
        this.props.y + this.props.height / 2 + me.datum().translateY;
      me.datum().center = [centerX, centerY];
    });
    me.dispatch("moved");
    makeDraggable1(me);
  }
  render() {
    const { node, x, y, width, height, ...remainingProps } = this.props;
    return (
      <rect
        id={node}
        x={x}
        y={y}
        width={width}
        height={height}
        {...remainingProps}
      />
    );
  }
}
export default Rect1;
