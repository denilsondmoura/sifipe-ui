import api from "../services/api";
import React, { useEffect, useState } from "react"
import FormDespesa from "../components/FormDespesa";
import CategoriaDespesa from "../models/CategoriaDespesa"
import DespesaList from "../components/DespesaList";
import Despesa from "../models/Despesa";
import TopBar from "../components/TopBar";

interface CategoriaDespesaOptionsType {
    value: number,
    label: string
}

export const DespesasPage = function () {

    const [catDespesa, setCatDespesa] = useState<CategoriaDespesa | null>(null)
    const [valor, setValor] = useState<string | number | string[] | undefined>("")
    const [descricao, setDescricao] = useState<string | number | string[] | undefined>("")
    const [categoriaDespesaOptions, setCategoriaDespesaOptions] = useState<CategoriaDespesaOptionsType[]>([])
    const [despesaOptions, setDespesaOptions] = useState<Despesa[]>([])
    const [valorTotalDespesas, setValorTotalDespesas] = useState<Number>(0)

    useEffect(() => {
        recuperaCategoriasDespesa()
        recuperaDespesas()
        
    }, [])

    useEffect(() => {
        contValorTotalDespesas(despesaOptions)
        
    }, [despesaOptions])

    const refreshPage = () => {
        window.location.reload();
    }

    async function recuperaCategoriasDespesa () {
        let categorias = Array()
        await api.get<CategoriaDespesa[]>("/expenseCategories").then((res) => {
            res.data?.forEach(categoria => {
                categorias.push({
                    value: categoria.id,
                    label: categoria.description
                })
            });
            setCategoriaDespesaOptions(categorias)
        })
    }

    function contValorTotalDespesas (despesas: Despesa[]) {
        let count = 0
        despesas.forEach((desp) => {
            console.log(count)
            count = count + desp.value
        })
        setValorTotalDespesas(count)
    }

    async function recuperaDespesas () {
        await api.get('/expenses/today').then((res) => {
            setDespesaOptions(res.data)
            // contValorTotalDespesas(despesaOptions)
        })
    }

    function handleChangeCategoria(e) {
        setCatDespesa({
            description: e.label,
            id: e.value
        })
    }

    function cadastrarDespesa(e) {
        e.preventDefault();
        let despesa = {
            category: catDespesa,
            description: descricao,
            value: valor
        }

        api.post("/expenses", despesa).then((res) => {
            setDescricao("")
            setValor("")
            setCatDespesa(null)
            recuperaDespesas()
        })

    }

    function deleteDespesa(id: Number) {
        api.delete("/expenses/" + id.toString()).then(() => {
            recuperaDespesas()
        })
    }

    console.log("Renderizou...")

    return (
        <>
            <div className="bg-[#C1E7E8] w-full h-screen">
                <TopBar/>
                <FormDespesa
                    descricao={descricao} 
                    setDescricao={setDescricao}
                    valor={valor} 
                    setValor={setValor}
                    catDespesa={catDespesa} 
                    handleChangeCategoria={handleChangeCategoria}
                    categoriaDespesaOptions={categoriaDespesaOptions} 
                    setCategoriaDespesaOptions={setCategoriaDespesaOptions}
                    cadastrarDespesa={cadastrarDespesa}
                />
                <DespesaList
                    despesasOptions={despesaOptions}
                    deleteDespesa={deleteDespesa}
                    valorTotalDespesas={valorTotalDespesas}
                />

                <div className="bg-[#f5f5f5] rounded-md lg:w-1/2 md:w-3/4 sm:w-11/12 my-3 mx-auto overflow-hidden pb-2">
                    <div className="flex flex-row gap-4 justify-between bg-[#31AFB4] p-3 text-white font-bold">
                        <h2>ESTE MÊS</h2>
                        <div className="flex flex-row gap-5">
                            <div className="flex flex-col text-center bg-teal-900 rounded-md p-2 ">
                                <span>META</span>
                                <span>R$ 130,00/Q</span>
                            </div>
                            <div className="flex flex-col text-center bg-teal-900 rounded-md p-2 ">
                                <span>TOTAL</span>
                                <span>R$ 453,75/Q</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-5 p-4 bg-gray-100">
                        <div className="flex flex-col grow bg-white rounded-md overflow-hidden">
                            <div className="flex flex-row justify-between bg-green-400 p-2 font-black">
                                <span>Q1</span>
                                <span>(01-08)</span>
                            </div>
                            <div className="flex flex-col p-2 text-center font-black h-24">
                                <span className="text-3xl">R$</span>
                                <span>127,89</span>
                            </div>
                        </div>
                        <div className="flex flex-col grow bg-white rounded-md overflow-hidden">
                            <div className="flex flex-row justify-between bg-green-400 p-2 font-black">
                                <span>Q1</span>
                                <span>(01-08)</span>
                            </div>
                            <div className="flex flex-col p-2 text-center font-black h-24">
                                <span className="text-3xl">R$</span>
                                <span>127,89</span>
                            </div>
                        </div>
                        <div className="flex flex-col grow bg-white rounded-md overflow-hidden">
                            <div className="flex flex-row justify-between bg-green-400 p-2 font-black">
                                <span>Q1</span>
                                <span>(01-08)</span>
                            </div>
                            <div className="flex flex-col p-2 text-center font-black h-24">
                                <span className="text-3xl">R$</span>
                                <span>127,89</span>
                            </div>
                        </div>
                        <div className="flex flex-col grow bg-white rounded-md overflow-hidden">
                            <div className="flex flex-row justify-between bg-green-400 p-2 font-black">
                                <span>Q1</span>
                                <span>(01-08)</span>
                            </div>
                            <div className="flex flex-col p-2 text-center font-black h-24">
                                <span className="text-3xl">R$</span>
                                <span>127,89</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}