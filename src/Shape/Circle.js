import React from "react";
import { makeDraggable } from "../Controller/Util";

class Circle extends React.Component {
  /*
  constructor(...args) {
    super(...args);
    this.properties = { ...this.props };
  }
  */
  componentDidMount() {
    if (this.props.draggable) {
      makeDraggable(this);
    }
  }
  render() {
    const properties = { ...this.props };
    delete properties.draggable;
    return <circle {...properties} />;
  }
}
export default Circle;
