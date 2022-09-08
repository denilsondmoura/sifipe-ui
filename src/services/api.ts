import axios from "axios";
import { useState, useEffect } from "react";

const api = axios.create({
    baseURL: "https://sifipe-api.herokuapp.com"
})

export default api;