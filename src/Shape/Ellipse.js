import React from "react";
import { makeDraggable } from "../Controller/Util";

class Ellipse extends React.Component {
  componentDidMount() {
    if (this.props.draggable) {
      makeDraggable(this);
    }
  }
  render() {
    const properties = { ...this.props };
    delete properties.draggable;
    return <ellipse {...properties} />;
  }
}
export default Ellipse;
