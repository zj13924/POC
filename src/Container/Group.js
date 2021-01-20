import React from "react";
import { makeDraggable } from "../Controller/Util";

class Group extends React.Component {
  componentDidMount() {
    if (this.props.draggable) {
      makeDraggable(this);
    }
  }
  render() {
    const properties = { ...this.props };
    delete properties.draggable;
    return <g {...properties} />;
  }
}
export default Group;
