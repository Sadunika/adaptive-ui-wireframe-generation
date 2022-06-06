import { Text, Group, Layer, Rect } from "react-konva";
import React from "react";

export function TextFieldUI({ element, yposition, xposition }) {
  let size = 20;
  const textWidth = 200;
  let label = element.label;
  if (element.mandotory) {
    label = element.label + " * ";
  }

  return (
    <Layer>
      <Group draggable>
        <Text text={label} fontSize={12} x={xposition} y={yposition + 5} />
        <Rect
          x={xposition + textWidth}
          y={yposition}
          width={200}
          height={size}
          fill="white"
          shadowBlur={0}
          stroke="black"
          strokeWidth={1}
        />
      </Group>
    </Layer>
  );
}
