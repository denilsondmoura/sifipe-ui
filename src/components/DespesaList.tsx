import React from "react";
import { Trash } from 'phosphor-react'
import Despesa from "../models/Despesa";

interface PropsType {
    despesasOptions: Despesa[],
    deleteDespesa: Function,
    valorTotalDespesas: Number
}

const DespesaList = function(props : PropsType) {

    return (
        <div className="bg-[#f5f5f5] rounded-md lg:w-1/2 md:w-3/4 sm:w-11/12 my-3 mx-auto overflow-hidden pb-2">
            <div className="bg-[#31AFB4] p-3 text-white font-bold flex justify-between leading-5">
                <div>
                    HOJE
                </div>
                <div className="">
                    R$ {props.valorTotalDespesas.toString()}
                </div>
            </div>
            {props.despesasOptions.length <= 0 && 
                <div className="p-3">
                    Você não teve gastos hoje!
                </div>
            }
            {props.despesasOptions.length > 0 && 
                <table className="p-10 bg-[#f5f5f5] w-full ">
                    <thead>
                        <tr className="m-3 px-3 flex flex-row gap-3 font-bold">
                            <th className="basis-6/12">Descrição</th>
                            <th className="basis-2/12">Categoria</th>
                            <th className="basis-2/12">Data</th>
                            <th className="basis-1/12">Valor</th>
                            <th className="basis-1/24"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.despesasOptions.map(despesa => (
                            <tr className="mx-3 my-1 px-3 py-2 rounded-md flex flex-row gap-3 bg-slate-200 hover:bg-slate-300 leading-6 text-justify" 
                                key={despesa.id}
                            >
                                <td className="basis-6/12">{despesa.description}</td>
                                <td className="basis-2/12">{despesa.categorie?.description}</td>
                                <td className="basis-2/12">{despesa.createdAt?.slice(0, 10)}</td>
                                <td className="basis-1/12">{despesa.value}</td>
                                <td className="basis-1/24">
                                    <button type="button" onClick={() => props.deleteDespesa(despesa.id)}><Trash size={24} /></button> 
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
        </div>
    )
}

export default DespesaList;