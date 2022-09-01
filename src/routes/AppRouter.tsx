import React from "react";
import { DespesasView } from "../pages/Despesas";
import {
    BrowserRouter as Router,
    Route,
    Routes
  } from "react-router-dom";


export const AppRouter = function () {

return (
    <Router>
        <Routes>
            <Route path="/despesa" element={<DespesasView/>} />
        </Routes>
    </Router>
    )
}