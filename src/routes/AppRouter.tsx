import React from "react";
import { DespesasPage } from "../pages/DespesasPage";
import ReceitasPage from "../pages/ReceitasPage";
import {
    BrowserRouter as Router,
    Route,
    Routes
  } from "react-router-dom";
import RelatoriosPage from "../pages/RelatoriosPage";


export const AppRouter = function () {

return (
    <Router>
        <Routes >
            <Route path="/despesas" element={<DespesasPage/>} />
            <Route path="/receitas" element={<ReceitasPage/>} />
            <Route path="/relatorios" element={<RelatoriosPage/>} />
        </Routes>
    </Router>
    )
}