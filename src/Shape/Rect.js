import React from "react";
import { makeDraggable } from "../Controller/Util";

class Rect extends React.Component {
  componentDidMount() {
    makeDraggable(this);
  }
  render() {
    return <rect {...this.props} />;
  }
}
export default Rect;
