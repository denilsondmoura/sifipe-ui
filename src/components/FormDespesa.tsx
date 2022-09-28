import React from "react";
import { Accordion, Col, ListGroup, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Select from 'react-select'
import CategoriaDespesa from "../models/CategoriaDespesa";
import RadixAccordion from "./RadixAccordion";

interface CategoriaDespesaOptionsType {
    value: number,
    label: string
}

interface ProspsType {
    descricao: string | number | string[] | undefined,
    setDescricao: Function,
    valor: string | number | string[] | undefined,
    setValor: Function,
    catDespesa: CategoriaDespesa | null,
    handleChangeCategoria: Function,
    cadastrarDespesa: Function,
    categoriaDespesaOptions: CategoriaDespesaOptionsType[],
    setCategoriaDespesaOptions: Function
}

const FormDespesa = function (props: ProspsType) {

    return (
        <div className="bg-[#f5f5f5] rounded-md lg:w-1/2 md:w-3/4 sm:w-11/12 my-3 mx-auto focus:bg-[#31AFB4]">
            <RadixAccordion>
                <form onSubmit={(e) => props.cadastrarDespesa(e)}>
                    <Form.Group className="mb-3" controlId="formDescricao">
                        <Form.Label>Descrição</Form.Label>
                        <Form.Control type="text" placeholder="Ex.: Hamburguer do Parente..."
                            onChange={e => props.setDescricao(e.target.value)}
                            value={props.descricao} />
                    </Form.Group>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="formCategoriaDespesa">
                                <Form.Label>Categoria</Form.Label>
                                <Select options={props.categoriaDespesaOptions}
                                    onChange={e => props.handleChangeCategoria(e)}
                                    value={{ label: props.catDespesa?.description, value: props.catDespesa?.id }} />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group className="mb-3" controlId="formValorDespesa">
                                <Form.Label>Valor (R$)</Form.Label>
                                <Form.Control type="number" placeholder="Ex.: 20,00" step="0.01"
                                    onChange={e => props.setValor(e.target.value)}
                                    value={props.valor} />
                            </Form.Group>
                        </Col>
                        <Col md={2} style={{ marginTop: "30px" }}>
                            <Button style={{ backgroundColor: "#31AFB4", borderColor: "#31AFB4", width: "100%" }} variant="primary" type="submit" >
                                Salvar
                            </Button>
                        </Col>
                    </Row>
                </form>
            </RadixAccordion>

            {/* <Accordion 
            // defaultActiveKey="0" 
            >
                <Accordion.Item eventKey="0" >
                    <Accordion.Button className="bg-[#31AFB4] rounded-md text-white font-bold focus:border-white">
                        ADICIONAR UM GASTO
                    </Accordion.Button>
                    <Accordion.Body>
                        <form onSubmit={(e) => props.cadastrarDespesa(e)}>
                            <Form.Group className="mb-3" controlId="formDescricao">
                                <Form.Label>Descrição</Form.Label>
                                <Form.Control type="text" placeholder="Ex.: Hamburguer do Parente..."
                                    onChange={e => props.setDescricao(e.target.value)}
                                    value={props.descricao} />
                            </Form.Group>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="formCategoriaDespesa">
                                        <Form.Label>Categoria</Form.Label>
                                        <Select options={props.categoriaDespesaOptions}
                                            onChange={e => props.handleChangeCategoria(e)}
                                            value={{ label: props.catDespesa?.description, value: props.catDespesa?.id }} />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="formValorDespesa">
                                        <Form.Label>Valor (R$)</Form.Label>
                                        <Form.Control type="number" placeholder="Ex.: 20,00" step="0.01"
                                            onChange={e => props.setValor(e.target.value)}
                                            value={props.valor} />
                                    </Form.Group>
                                </Col>
                                <Col md={2} style={{ marginTop: "30px" }}>
                                    <Button style={{ backgroundColor: "#31AFB4", borderColor: "#31AFB4", width: "100%" }} variant="primary" type="submit" >
                                        Salvar
                                    </Button>
                                </Col>
                            </Row>
                        </form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion> */}
        </div>
    )
}

export default FormDespesa