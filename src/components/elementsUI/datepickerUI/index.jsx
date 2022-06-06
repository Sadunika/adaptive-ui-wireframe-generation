import { Text, Image, Layer, Rect, Group } from "react-konva";
import React from "react";
import calender from "../../../assets/images/calender.jpg";
import useImage from "use-image";

export function DatepickerUI({ element, xposition, yposition }) {
  let size = 20;
  const textWidth = 200;
  const [image] = useImage(calender);
  let label = element.label;
  if (element.mandotory) {
    label = element.label + " * ";
  }

  return (
    <Layer>
      <Group draggable>
        <Text text={label} fontSize={12} x={xposition} y={yposition} />
        <Rect
          x={xposition + textWidth}
          y={yposition}
          width={170}
          height={size}
          fill="white"
          stroke="black"
          strokeWidth={1}
        />
        <Text
          text=" DD/MM/YYYY"
          fontSize={12}
          x={xposition + textWidth}
          y={yposition + 4}
        />
        <Image
          image={image}
          x={xposition + textWidth + 180}
          y={yposition - 5}
          height={30}
          width={30}
        />
      </Group>
    </Layer>
  );
}
