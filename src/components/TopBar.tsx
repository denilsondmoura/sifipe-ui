import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = function () {

    return (
        <div className="bg-[#31AFB4] w-full  mb-3">
            <div className='w-2/4 p-2 m-auto h-full  flex flex-row-reverse gap-4 font-bold text-white '>
                <Link to="/relatorios" className=" leading-10 text-white">Relatórios</Link>
                <Link to="/receitas" className=" leading-10 text-white">Receita</Link>
                <Link to="/despesas" className=" leading-10 text-white">Despesa</Link>
            </div>
        </div>
    )
}

export default TopBar