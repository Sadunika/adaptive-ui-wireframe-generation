import { Text, Layer, Rect, Group } from "react-konva";
import React from "react";

export function ButtonFieldUI({
  element,
  yposition,
  title,
  xposition,
  placeholder,
}) {
  let width = 120;
  let height = 25;
  if (title == null) {
    title = "Title";
  }

  return (
    <Layer>
      <Group draggable>
        <Rect
          x={xposition}
          y={yposition}
          width={width}
          height={height}
          fill="white"
          shadowBlur={0}
          stroke="black"
          strokeWidth={1}
        />
        <Text
          text={placeholder}
          fontSize={12}
          x={xposition + 35}
          y={yposition + 7}
        />
      </Group>
    </Layer>
  );
}
