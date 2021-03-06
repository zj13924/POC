import ReactDOM from "react-dom";
import * as d3 from "d3";
export function makeDraggable(comp) {
  let translateX = 0;
  let translateY = 0;
  const handleDrag = d3
    .drag()
    .subject(function () {
      const me = d3.select(this);
      return { x: translateX, y: translateY };
    })
    .on("drag", function (event) {
      const me = d3.select(this);
      const transform = `translate(${event.x}, ${event.y})`;
      translateX = event.x;
      translateY = event.y;
      me.attr("transform", transform);
    });
  const node = ReactDOM.findDOMNode(comp);
  handleDrag(d3.select(node));
}

export function makeDraggable1(me) {
  //make "Ellipse1" components draggable
  const handleDrag = d3
    .drag()
    .subject(function () {
      const translateX = me.datum().translateX;
      const translateY = me.datum().translateY;
      return { x: translateX, y: translateY };
    })
    .on("drag", function (event) {
      const transform = `translate(${event.x}, ${event.y})`;
      me.datum().translateX = event.x;
      me.datum().translateY = event.y;
      me.attr("transform", transform);
      me.dispatch("moved");
    });
  handleDrag(me);
}

export function makeDProperty(x0, y0, x1, y1, x2, y2, x3, y3) {
  return `M ${x0} ${y0} C ${x1} ${y1}, ${x2} ${y2}, ${x3} ${y3}`;
}

export function makeDPropertyFromObj(data) {
  return `M ${data.x0} ${data.y0} C ${data.x1} ${data.y1}, ${data.x2} ${data.y2}, ${data.x3} ${data.y3}`;
}
/*
export function assignId(obj) {
  let id = identifiables.get(obj);
  if (id) {
    return id;
  }
  id = nextId;
  nextId += 1;
  identifiables.set(obj, id);
  return id;
}
*/
