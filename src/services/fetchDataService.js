import { baseURL } from "../common/constants";
import axios from "axios";

export const fetchElements = async (input) => {
  const data = new FormData();
  data.append("file", input);
  data.append("filename", "file1");

  try {
    const response = await axios.post(baseURL, data);
    return { response: response.data.data };
  } catch (error) {
    console.log(error, "error");
  }
};
