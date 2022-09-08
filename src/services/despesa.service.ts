import {useState} from "react"
import api from "./api";

export const getDespesas<T = unknown>() {
    const [data, setData] = useState<T | null>(null)
    api.get("/despesa")
    .then(response => {
        setData(response.data)
    })

    return [data]
}