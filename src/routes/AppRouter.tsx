import React from "react";
import { Despesa } from "../telas/Despesas";
import {
    BrowserRouter as Router,
    Route,
    Routes
  } from "react-router-dom";


export const AppRouter = function () {

return (
    <Router>
        <Routes>
            <Route path="/despesa" element={<Despesa/>} />
        </Routes>
    </Router>
    )
}