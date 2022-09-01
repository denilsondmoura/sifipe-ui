import React from "react"
import { Accordion, Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Select from 'react-select'
import { WhiteBoard, BackgroundTop, BackgroundBot, FormStyled } from "./style";

export const DespesasView = function () {

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
    return (
        <>
            <BackgroundTop>.</BackgroundTop>
            <BackgroundBot>.</BackgroundBot>
            
            <WhiteBoard>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Adicionar um gasto</Accordion.Header>
                        <Accordion.Body>
                            <FormStyled>
                                <Form.Group className="mb-3" controlId="formTipoDespessa">
                                    <Form.Label>Tipo</Form.Label>
                                    <Select options={options} />
                                </Form.Group>
                                <Row>
                                    <Form.Label>Valor (R$)</Form.Label>
                                </Row>
                                <Row>
                                    <Col md={10}>
                                        <Form.Control type="number" placeholder="Ex.: 20,00" />
                                    </Col>
                                    <Col md={2}>
                                        <Button style={{backgroundColor: "#115571", width: "100%"}} variant="primary" type="submit">
                                            Salvar
                                        </Button>
                                    </Col>
                                </Row>
                            </FormStyled>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                
            </WhiteBoard>
        </>
    )
}