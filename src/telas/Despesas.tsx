import React from "react"
import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

export const Despesa = function () {

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md={6} jus >
                    <Stack direction="horizontal" gap={2}>
                        <Form.Select aria-label="Default select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                        <Button variant="secondary">Submit</Button>
                    </Stack>
                </Col>
            </Row>
        </Container>
    )
}