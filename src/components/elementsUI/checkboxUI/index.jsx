import { Text, Rect, Layer, Group } from "react-konva";
import React from "react";

export function CheckboxUI({ element, yposition, xposition }) {
  let size = 15;
  const textWidth = 200;
  let label = element.label;
  if (element.mandotory) {
    label = element.label + " * ";
  }

  return (
    <Layer>
      <Group draggable>
        <Text text={label} fontSize={12} x={xposition} y={yposition + 3} />
        <Rect
          x={xposition + textWidth}
          y={yposition}
          width={size}
          height={size}
          fill="white"
          shadowBlur={0}
          stroke="black"
          strokeWidth={1}
        />
        <Text
          text="Option 1"
          fontSize={12}
          x={xposition + textWidth + 20}
          y={yposition + 3}
        />
        <Rect
          x={xposition + textWidth + 95}
          y={yposition}
          width={size}
          height={size}
          fill="white"
          shadowBlur={0}
          stroke="black"
          strokeWidth={1}
        />
        <Text
          text="Option 2"
          fontSize={12}
          x={xposition + textWidth + 115}
          y={yposition + 3}
        />
      </Group>
    </Layer>
  );
}
