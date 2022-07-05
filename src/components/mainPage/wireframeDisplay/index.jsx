import React, { useState } from "react";
import { Col, Row, Button, Modal, Alert } from "react-bootstrap";
import { Stage } from "react-konva";
import { UIElementGenerator } from "../../elementsUI/UIElementGenerator";
import ReactStars from "react-rating-stars-component";
import { FaFileDownload, FaRedo, FaStar } from "react-icons/fa";
import { saveReview } from "../../../services/fetchDataService";
import ReactSnackBar from "react-js-snackbar";
import { FaExclamationTriangle } from "react-icons/fa";
import "./style.css";
import {
  exportComponentAsJPEG,
  exportComponentAsPNG,
} from "react-component-export-image";

const WireframeDisplay = ({ elements }) => {
  const ref = React.createRef();
  const [show, setShow] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [toastMsg, setToastMsg] = useState("");
  const [showToast, setShowToast] = useState(false);

  function refreshPage() {
    window.location.reload(false);
  }

  function displayReviewAddModal() {
    setShow(true);
  }

  const ratingAdd = (rating) => {
    setRating(rating);
  };

  const handleClose = () => {
    setRating(0);
    setComment("");
    setShow(false);
  };

  const addReview = () => {
    if (rating > 0) {
      const payload = {
        rating: rating,
        comment: comment,
      };
      saveReview(payload);
      handleClose();
    } else {
      manageErrorMessages("Please select the rating.");
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
      <div className={"canvas"}>
        <Row>
          <Col md={8}>
            {elements && elements.length > 0 ? (
              <div className="alert-description">
                <Alert key="info" variant="info">
                  You can drag the elements within the canavs area and redesign
                  the UI wireframe as your preference.
                </Alert>
              </div>
            ) : null}
            <div ref={ref} className="wrapper">
              <Stage width={960} height={450} className="stage">
                {elements && <UIElementGenerator element={elements} />}
              </Stage>
            </div>
          </Col>
          <Col md={4} className="center-block">
            <div className="button-wrapper">
              <div className="section-wrapper">
                <p className="instruction-for-buttons">
                  Download the generated UI wireframe as PNG or JPEG.
                </p>
                <Button
                  style={{
                    backgroundColor: "#fff",
                    borderColor: "#FF8C00",
                    color: "#FF8C00",
                    marginRight: "10px",
                  }}
                  onClick={() => exportComponentAsJPEG(ref)}
                >
                  <FaFileDownload className="button-icon-margin" />
                  Download JPEG
                </Button>
                <Button
                  style={{
                    backgroundColor: "#fff",
                    borderColor: "#FF8C00",
                    color: "#FF8C00",
                    marginRight: "10px",
                  }}
                  onClick={() => exportComponentAsPNG(ref)}
                >
                  <FaFileDownload className="button-icon-margin" />
                  Download PNG
                </Button>
              </div>
              <div className="section-wrapper">
                <p className="instruction-for-buttons">
                  Add a review and a rating to the generated UI wireframe.
                </p>
                <Button
                  style={{
                    backgroundColor: "#fff",
                    borderColor: "#FF8C00",
                    color: "#FF8C00",
                    marginRight: "10px",
                  }}
                  onClick={() => displayReviewAddModal()}
                >
                  <FaStar className="button-icon-margin" />
                  Review
                </Button>
              </div>
              <div className="section-wrapper">
                <p className="instruction-for-buttons">Reset the canvas.</p>
                <Button
                  style={{
                    backgroundColor: "#fff",
                    borderColor: "#FF8C00",
                    color: "#FF8C00",
                    marginRight: "10px",
                  }}
                  onClick={() => refreshPage()}
                >
                  <FaRedo className="button-icon-margin" />
                  Reset
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <div className="review-add-modal">
            <h3>Please rate you sketch design.</h3>
            <ReactStars
              count={5}
              onChange={ratingAdd}
              size={25}
              activeColor="#EC7A23"
              classNames="stars"
            />
            <textarea
              rows={4}
              style={{
                borderRadius: 20,
                flex: 1,
                width: "100%",
                paddingTop: 10,
                paddingLeft: 10,
              }}
              placeholder={"Add a comment"}
              onChange={(event) => setComment(event.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={addReview}
            style={{
              backgroundColor: "#EC7A23",
              borderColor: "#EC7A23",
            }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      <ReactSnackBar
        Show={showToast}
        Icon={<FaExclamationTriangle size={25} color={"red"} />}
      >
        {toastMsg}
      </ReactSnackBar>
    </>
  );
};

export default WireframeDisplay;
