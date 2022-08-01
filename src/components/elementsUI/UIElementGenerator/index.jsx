import React, { useEffect, useState } from "react";
import { TextFieldUI } from "../textFieldUI";
import { ButtonFieldUI } from "../buttonUI";
import { RadioButtonsUI } from "../radioButtonsUI";
import { DropdownUI } from "../dropdownUI";
import { DatepickerUI } from "../datepickerUI";
import { CheckboxUI } from "../checkboxUI";

export function UIElementGenerator({ element }) {
  const [buttonElementArray, setButtonElementArray] = useState([]);
  const [textElementArray, setTextElementArray] = useState([]);
  const [radioButtonsArray, setRadioButtonsArray] = useState([]);
  const [dropdownArray, serDropdownArray] = useState([]);
  const [checkboxesArray, setCheckboxesArray] = useState([]);
  const [datePickerArray, setDatePickerArray] = useState([]);
  const xposition = 250;
  const yposition = 30;
  const element_squre_height = 40;
  const element_circle_height = 30;

  useEffect(() => {
    const buttonList = [];
    const textFieldsList = [];
    const radioButtonsList = [];
    const dropdownList = [];
    const checkboxesList = [];
    const datePickerList = [];

    element.forEach((el) => {
      if (el.element === "UI_BUTTON") {
        buttonList.push(el);
      } else if (el.element === "UI_TEXT_FIELD") {
        textFieldsList.push(el);
      } else if (el.element === "UI_RADIO") {
        radioButtonsList.push(el);
      } else if (el.element === "UI_CHECKBOX") {
        checkboxesList.push(el);
      } else if (el.element === "UI_DROPDOWN") {
        dropdownList.push(el);
      } else if (el.element === "UI_DATE") {
        datePickerList.push(el);
      } else {
        console.log("error");
      }
    });
    setButtonElementArray(buttonList);
    setTextElementArray(textFieldsList);
    setRadioButtonsArray(radioButtonsList);
    setCheckboxesArray(checkboxesList);
    serDropdownArray(dropdownList);
    setDatePickerArray(datePickerList);
  }, [element]);

  return (
    <>
      {textElementArray.map((element, index) => (
        <TextFieldUI
          element={element}
          yposition={yposition + index * element_squre_height}
          xposition={xposition}
          placeholder={element.label}
        />
      ))}
      {radioButtonsArray.map((element, index) => (
        <RadioButtonsUI
          element={element}
          yposition={yposition + textElementArray.length * element_squre_height + index * element_circle_height}
          xposition={xposition}
        />
      ))}
      {dropdownArray.map((element, index) => (
        <DropdownUI
          element={element}
          yposition={
            yposition +
            textElementArray.length * element_squre_height +
            radioButtonsArray.length * element_circle_height +
            index * element_squre_height
          }
          xposition={xposition}
        />
      ))}
      {checkboxesArray.map((element, index) => (
        <CheckboxUI
          element={element}
          xposition={xposition}
          yposition={
            yposition +
            textElementArray.length * element_squre_height +
            radioButtonsArray.length * element_circle_height +
            dropdownArray.length * element_squre_height +
            index * element_squre_height
          }
        />
      ))}
      {datePickerArray.map((element, index) => (
        <DatepickerUI
          element={element}
          yposition={
            yposition +
            textElementArray.length * element_squre_height +
            radioButtonsArray.length * element_circle_height +
            dropdownArray.length * element_squre_height +
            checkboxesArray.length * element_squre_height +
            index * element_squre_height
          }
          xposition={xposition}
        />
      ))}
      {buttonElementArray.map((element, index) => (
        <ButtonFieldUI
          element={element}
          yposition={
            yposition +
            textElementArray.length * element_squre_height +
            radioButtonsArray.length * element_circle_height +
            dropdownArray.length * element_squre_height +
            checkboxesArray.length * element_squre_height +
            datePickerArray.length * element_squre_height
          }
          xposition={index === 0 ? xposition : xposition + (index + 1) * 100}
          placeholder={element.label}
        />
      ))}
    </>
  );
}
