import { Text, Circle, Layer, Group } from "react-konva";
import React from "react";

export function RadioButtonsUI({ element, yposition, xposition }) {
  let size = 15;
  const textWidth = 200;
  let label = element.label;
  if (element.mandotory) {
    label = element.label + " * ";
  }

  return (
    <Layer>
      <Group draggable>
        <Text text={label} fontSize={12} x={xposition} y={yposition} />
        <Circle
          x={xposition + textWidth + 5}
          y={yposition + 5}
          width={size}
          fill="white"
          shadowBlur={0}
          stroke="black"
          strokeWidth={1}
        />
        <Text
          text="Option 1"
          fontSize={12}
          x={xposition + textWidth + 20}
          y={yposition}
        />
        <Circle
          x={xposition + textWidth + 100}
          y={yposition + 5}
          width={size}
          fill="white"
          shadowBlur={0}
          stroke="black"
          strokeWidth={1}
        />
        <Text
          text="Option 2"
          fontSize={12}
          x={xposition + textWidth + 115}
          y={yposition}
        />
      </Group>
    </Layer>
  );
}
