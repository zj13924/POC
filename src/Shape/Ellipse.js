import React from "react";
import { makeDraggable } from "../Controller/Util";

class Ellipse extends React.Component {
  componentDidMount() {
    makeDraggable(this);
  }
  render() {
    return <ellipse {...this.props} />;
  }
}
export default Ellipse;
