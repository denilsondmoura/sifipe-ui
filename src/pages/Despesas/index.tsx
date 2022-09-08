import axios from "axios";
import React, { useEffect, useState } from "react"
import { Accordion, Col, Container, Row, Toast } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Select from 'react-select'
import { useGet } from "../../services/useGet";
import { usePost } from "../../services/usePost";
import { WhiteBoard, BackgroundTop, BackgroundBot, FormStyled } from "./style";
import CategoriaDespesa from "../../models/CategoriaDespesa"
import Despesa from "../../models/Despesa"

export const DespesasView = function () {

    const [catDespesa, setCatDespesa] = useState<CategoriaDespesa | null>(null)
    const [valor, setValor] = useState<number | null>()
    const [descricao, setDescricao] = useState<string | null>()

    function handleChangeCategoria(event) {
        setCatDespesa({
            descricao: event.label,
            id: event.value
        })
    }

    const cadastrarDespesa = (e) => {
        e.preventDefault();
        let despesa = {
            categoria: catDespesa,
            descricao: descricao,
            valor: valor
        }

        usePost("https://sifipe-api.herokuapp.com/despesa", despesa)
        setDescricao("")
        setValor(0)
        setCatDespesa(null)

        console.log(catDespesa);
    }
    
    const { data: categorias } = useGet<CategoriaDespesa[]>("https://sifipe-api.herokuapp.com/categoriaDespesa")

    let categoriaDespesaOptions = Array()
    categorias?.forEach(categoria => {
        categoriaDespesaOptions.push({
            value: categoria.id,
            label: categoria.descricao,
        }) 
    });

    return (
        <>
            <BackgroundTop>.</BackgroundTop>
            <BackgroundBot>.</BackgroundBot>
            
            <WhiteBoard>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>ADICIONAR UM GASTO</Accordion.Header>
                        <Accordion.Body>
                            <FormStyled onSubmit={cadastrarDespesa}>
                                <Form.Group className="mb-3" controlId="formDescricao">
                                    <Form.Label>Descrição</Form.Label>
                                    <Form.Control type="text" placeholder="Ex.: Hamburguer do Parente..." 
                                        onChange={e => setDescricao(e.target.value)}
                                        value={descricao}/>
                                </Form.Group>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formTipoDespessa">
                                            <Form.Label>Categoria</Form.Label>
                                            <Select options={categoriaDespesaOptions} 
                                            onChange={e => handleChangeCategoria(e)}
                                            value={{label: catDespesa?.descricao, value: catDespesa?.id}}/>
                                        </Form.Group>
                                    </Col> 
                                    <Col md={4}>
                                        <Form.Group className="mb-3" controlId="formTipoDespessa">
                                            <Form.Label>Valor (R$)</Form.Label>
                                            <Form.Control type="number" placeholder="Ex.: 20,00" step="0.01" 
                                            onChange={e => setValor(e.target.value)}
                                            value={valor}/>
                                        </Form.Group>
                                    </Col>
                                    <Col md={2} style={{marginTop: "30px"}}>
                                        <Button style={{backgroundColor: "#115571", width: "100%"}} variant="primary" type="submit" >
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