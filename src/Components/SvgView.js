import React from "react";
import Rect from "../Shape/Rect";
import Circle from "../Shape/Circle";
import Ellipse from "../Shape/Ellipse";
import Group from "../Container/Group";
import Rect1 from "../Shape/Rect1";
import Line from "../Shape/Line";
import Path from "../Shape/Path";
import Ellipse1 from "../Shape/Ellipse1";
class SvgView extends React.Component {
  render() {
    return (
      <svg style={{ border: "1px solid" }} width={800} height={600}>
        <Circle cx={200} cy={200} r={30} draggable={true} fill={"#dd0"} />
        <Rect
          x={100}
          y={100}
          width={50}
          height={50}
          draggable={true}
          fill={"#d70"}
        />
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
          <Circle cx={500} cy={200} r={30} draggable={false} fill={"#77d"} />
          <Rect
            x={400}
            y={100}
            width={50}
            height={50}
            draggable={false}
            fill={"#07d"}
          />
        </Group>

        <Rect1 node="node-1" x={400} y={400} width={30} height={30} />
        <Rect1 node="node-2" x={600} y={400} width={30} height={30} />
        <Line from="node-1" to="node-2" style={{ stroke: "red" }} />

        <Ellipse1
          node="node-3"
          x={500}
          y={500}
          width={50}
          height={35}
          fill={"#ccc"}
          stroke={"#000"}
        />
        <Ellipse1
          node="node-4"
          x={700}
          y={550}
          width={50}
          height={35}
          fill={"#ccc"}
          stroke={"#000"}
        />
        <Line
          from="node-3"
          to="node-4"
          style={{ stroke: "green", strokeWidth: "3px" }}
        />

        <Ellipse1
          node="node-5"
          x={100}
          y={500}
          width={50}
          height={35}
          fill={"#f1c40f"}
          stroke={"#000"}
        />
        <Ellipse1
          node="node-6"
          x={400}
          y={550}
          width={50}
          height={35}
          fill={"#f1c40f"}
          stroke={"#000"}
        />
        <Path
          from="node-5"
          to="node-6"
          style={{ stroke: "green", fill: "#c021", strokeWidth: "3px" }}
        />
      </svg>
    );
  }
}
export default SvgView;
