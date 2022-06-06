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
    setInput(event.target.files[0]);
  }

  const generate = async (input) => {
    if (!input) {
      manageErrorMessages("Please upload a file.");
    } else {
      setShowToast(false);
      const { response } = await fetchElements(input);
      if (response && response.length === 0) {
        manageErrorMessages("Could not find any UI elements.");
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
                    Upload file to generate UI wireframe :
                  </div>
                  <input ref={ref} onChange={onFileChange} type="file" />
                </div>
              </Col>
              <Col md={4}>
                <Button
                  variant="success"
                  style={{
                    backgroundColor: "#EC7A23",
                    borderColor: "#EC7A23",
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
