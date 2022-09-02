import React, { useState } from "react"
import { Accordion, Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Select from 'react-select'
import { useGet, usePost } from "../../hooks/useServise";
import { WhiteBoard, BackgroundTop, BackgroundBot, FormStyled } from "./style";

export const DespesasView = function () {

    type CategoriaDespesa = {
        descricao: string;
        id: number;
    }

    type Despesa = {
        categoria: CategoriaDespesa;
        data: string;
        descricao: string;
        id: number;
        valor: number;
    }

    const initialCategoriaDespesa = {
        categoria: {
            descricao: null,
            id: null,
        }
    }

    const [categoriaDespesa, setCategoriaDespesa] = useState(initialCategoriaDespesa)
    const [valor, setValor] = useState()

    function handleChangeCategoria(event) {
        setCategoriaDespesa({
            categoria: {
                descricao: event.label,
                id: event.value
            }
        })
    }

    const cadastrarDespesa= (e) => {
        e.preventDefault();
        let despesa = {
            id: null,
            descricao: "teste",
            categoria: categoriaDespesa,
            data: null,
            valor: valor
          }
          
        const { data: despesaCadastrada } = usePost("https://sifipe-api.herokuapp.com/despesa", despesa)
        console.log("categoriaDespesa", categoriaDespesa, "\nvalor", valor);
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
                        <Accordion.Header>Adicionar um gasto</Accordion.Header>
                        <Accordion.Body>
                            <FormStyled onSubmit={cadastrarDespesa}>
                                <Form.Group className="mb-3" controlId="formTipoDespessa">
                                    <Form.Label>Tipo</Form.Label>
                                    <Select options={categoriaDespesaOptions} onChange={e => handleChangeCategoria(e)}/>
                                </Form.Group>
                                <Row>
                                    <Form.Label>Valor (R$)</Form.Label>
                                </Row>
                                <Row>
                                    <Col md={10}>
                                        <Form.Control type="number" placeholder="Ex.: 20,00" onChange={e => setValor(e.target.value)}/>
                                    </Col>
                                    <Col md={2}>
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