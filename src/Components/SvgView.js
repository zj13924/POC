import React from "react";
import Rect from "../Shape/Rect";
import Circle from "../Shape/Circle";
import Ellipse from "../Shape/Ellipse";
import Group from "../Container/Group";
class SvgView extends React.Component {
  render() {
    return (
      <svg style={{ border: "1px solid" }} width={800} height={600}>
        <Circle cx={200} cy={200} r={30} draggable={true} />
        <Rect x={100} y={100} width={50} height={50} draggable={true} />
        <Ellipse
          cx={300}
          cy={300}
          rx={50}
          ry={35}
          fill={"#ccc"}
          stroke={"#000"}
          draggable={true}
        />

        <Group
          style={{ outline: "10px dotted #0a0", outlineOffset: "10px" }}
          draggable={true}
        >
          <Circle cx={500} cy={200} r={30} draggable={false} />
          <Rect x={400} y={100} width={50} height={50} draggable={false} />
        </Group>
      </svg>
    );
  }
}
export default SvgView;
