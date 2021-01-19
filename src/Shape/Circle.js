import React from "react";
import { makeDraggable } from "../Controller/Util";

class Circle extends React.Component {
  componentDidMount() {
    makeDraggable(this);
  }
  render() {
    return <circle {...this.props} />;
  }
}
export default Circle;
