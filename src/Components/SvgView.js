import React from "react";
import Rect from "../Shape/Rect";
import Circle from "../Shape/Circle";
import Ellipse from "../Shape/Ellipse";
class SvgView extends React.Component {
  render() {
    return (
      <svg style={{ border: "1px solid" }} width={800} height={600}>
        <Circle cx={200} cy={200} r={30} />
        <Rect x={100} y={100} width={50} height={50} />
        <Ellipse
          cx={300}
          cy={300}
          rx={50}
          ry={35}
          fill={"#ccc"}
          stroke={"#000"}
        />
      </svg>
    );
  }
}
export default SvgView;
