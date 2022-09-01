import React from "react"
import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import { Section } from "./style";

export const DespesasView = function () {

    return (
        // <Container>
            <Container className="justify-content" >
                <Row>
                    <Col md={8}>
                          
                    <Row>
                        <Col md={9}>
                            <Form.Group className="mb-3" controlId="formTipoDespessa">
                                <Form.Label>Tipo</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md={3}>
                            <Form.Group className="mb-3" controlId="formValorDespesa">
                                <Form.Label>Valor (R$)</Form.Label>
                                <Form.Control type="text" placeholder="Ex.: 20,00" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Button style={{backgroundColor: "#115571"}} variant="primary" type="submit">
                            Registrar
                        </Button>
                    </Row>
                    </Col>
                </Row>                
            </Container>
        // </Container>
    )
}