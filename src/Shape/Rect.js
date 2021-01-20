import React from "react";
import { makeDraggable } from "../Controller/Util";

class Rect extends React.Component {
  componentDidMount() {
    if (this.props.draggable) {
      makeDraggable(this);
    }
  }
  render() {
    const properties = { ...this.props };
    delete properties.draggable;
    return <rect {...properties} />;
  }
}
export default Rect;
