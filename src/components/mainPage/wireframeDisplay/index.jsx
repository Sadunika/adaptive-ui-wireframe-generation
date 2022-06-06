import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import { Stage } from "react-konva";
import { UIElementGenerator } from "../../elementsUI/UIElementGenerator";
import { FaFileDownload, FaRedo } from "react-icons/fa";
import "./style.css";
import {
  exportComponentAsJPEG,
  exportComponentAsPNG,
} from "react-component-export-image";

const WireframeDisplay = ({ elements }) => {
  console.log(elements, "elements");
  const ref = React.createRef();

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className={"canvas"}>
      <Row>
        <Col md={8}>
          <div ref={ref}>
            <Stage width={1000} height={450} className="stage">
              {elements && <UIElementGenerator element={elements} />}
            </Stage>
          </div>
        </Col>
        <Col md={4} className="center-block">
          <div className="button-wrapper">
            {elements && elements.length > 0 ? (
              <div>
                <p className="drag-instruction">
                  You can drag the elements within the canavs area and redesign
                  the wireframe as your wish.
                </p>
              </div>
            ) : null}
            <div>
              <p className="instruction-for-buttons">
                Download the generated UI wireframe as PNG or JPEG.
              </p>
              <Button
                style={{
                  backgroundColor: "#1E90FF",
                  borderColor: "#1E90FF",
                  marginBottom: "20px",
                }}
                onClick={() => exportComponentAsJPEG(ref)}
              >
                <FaFileDownload className="button-icon-margin" />
                Download JPEG
              </Button>
              <br />
              <Button
                style={{
                  backgroundColor: "#1E90FF",
                  borderColor: "#1E90FF",
                  marginBottom: "20px",
                }}
                onClick={() => exportComponentAsPNG(ref)}
              >
                <FaFileDownload className="button-icon-margin" />
                Download PNG
              </Button>
            </div>
            <div>
              <p className="instruction-for-buttons">Reset the canvas.</p>
              <Button
                style={{
                  backgroundColor: "#228B22",
                  borderColor: "#228B22",
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
  );
};

export default WireframeDisplay;
