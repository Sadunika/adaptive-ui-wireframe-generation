import React, { useState } from 'react';
import { Row, Col, Container } from "react-bootstrap";
import FileUpload from './fileUpload';
import WireframeDisplay from './wireframeDisplay';
import './style.css'

const MainPage = () => {
    const [elements, setElements] = useState([]);
    const getElements = (list) => {
        setElements(list)
    }

    return (
        <Container fluid>
            <Row>
                <Col md={8} className='center'>
                    <FileUpload getElements={getElements} />
                </Col>
                <Col md={12}>
                    <WireframeDisplay elements={elements}></WireframeDisplay>
                </Col>
            </Row>
        </Container>
    )
}


export default MainPage;
