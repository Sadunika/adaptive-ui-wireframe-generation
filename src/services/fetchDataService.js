import { baseURL } from "../common/constants";
import axios from "axios";
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDq3N7xQ4XJRleiTzJ5SFmuJvWvVm0Qvbo",
  authDomain: "adaptive-ui-wireframe.firebaseapp.com",
  projectId: "adaptive-ui-wireframe",
  storageBucket: "adaptive-ui-wireframe.appspot.com",
  messagingSenderId: "414091218781",
  appId: "1:414091218781:web:d8fe7376e810b5559a22b4",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ experimentalForceLongPolling: true });

var uniqid = require("uniqid");

export const fetchElements = async (input) => {
  const data = new FormData();
  data.append("file", input);
  data.append("filename", "file1");

  try {
    const response = await axios.post(baseURL, data);
    return {
      response: response.data.data.elements,
      error: response.data.data.error,
    };
  } catch (error) {
    console.log(error, "error");
  }
};

export const saveReview = async (payload) => {
  var db = firebase.firestore();
  db.collection("user-reviews")
    .doc(uniqid())
    .set({
      rating: payload.rating,
      comment: payload.comment,
    })
    .catch((error) => {
      console.error("Error adding review: ", error);
    });
};
