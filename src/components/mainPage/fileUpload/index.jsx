import React, { useState } from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import { fetchElements } from "../../../services/fetchDataService";
import { SiMicrogenetics } from "react-icons/si";
import { FaExclamationTriangle } from "react-icons/fa";
import ReactSnackBar from "react-js-snackbar";
import "./style.css";

const FileUpload = ({ getElements }) => {
  const [input, setInput] = useState();
  const [toastMsg, setToastMsg] = useState("");
  const [showToast, setShowToast] = useState(false);
  const ref = React.useRef();
  function onFileChange(event) {
    const docxType =
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
    var file = event.target.files[0];
    if (file.type === docxType) {
      setInput(file);
    } else {
      ref.current.value = "";
      manageErrorMessages("Only word documents can be uploaded.");
    }
  }

  const generate = async (input) => {
    if (!input) {
      manageErrorMessages("Please upload a document.");
    } else {
      setShowToast(false);
      const { response, error } = await fetchElements(input);
      console.log(error, "error");
      if (error) {
        manageErrorMessages(error);
        return;
      }
      if (response && response.length === 0) {
        manageErrorMessages("Could not find any supported UI elements in the field specification.");
      } else {
        getElements(response);
      }
    }
  };

  function manageErrorMessages(message) {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
    setToastMsg(message);
  }

  return (
    <>
      <div className="content">
        <Card className="text-center">
          <Card.Body>
            <Row>
              <Col md={8}>
                <div>
                  <div className="instruction-note">
                    Upload a file to generate UI wireframe :
                  </div>
                  <input ref={ref} onChange={onFileChange} type="file" />
                </div>
              </Col>
              <Col md={4}>
                <Button
                  variant="success"
                  style={{
                    backgroundColor: "#FF8C00",
                    borderColor: "#FF8C00",
                  }}
                  onClick={() => generate(input)}
                >
                  <SiMicrogenetics className="button-icon-margin" />
                  Generate
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
      <ReactSnackBar
        Show={showToast}
        Icon={<FaExclamationTriangle size={25} color={"red"} />}
      >
        {toastMsg}
      </ReactSnackBar>
    </>
  );
};

export default FileUpload;
