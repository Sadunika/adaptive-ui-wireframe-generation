import { Text, Group, Layer, Rect, Image } from "react-konva";
import React from "react";
import triangle from "../../../assets/images/triangle.png";
import useImage from "use-image";

export function DropdownUI({ element, xposition, yposition }) {
  let size = 20;
  const textWidth = 200;
  const [image] = useImage(triangle);
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
        <Rect
          x={xposition + textWidth + 180}
          y={yposition}
          width={20}
          height={size}
          fill="white"
          shadowBlur={0}
          stroke="black"
          strokeWidth={1}
        />
        <Text
          text=" - Select -"
          fontSize={12}
          x={xposition + textWidth}
          y={yposition + 5}
        />
        <Image
          image={image}
          x={xposition + textWidth + 184}
          y={yposition + 4}
          height={12}
          width={12}
        />
      </Group>
    </Layer>
  );
}
