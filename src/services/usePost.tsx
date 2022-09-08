import axios from "axios";
import { useState, useEffect } from "react";

export function usePost<T = unknown>(url: string, body: object) {
    // const [data, setData] = useState<T | null>(null)

    // useEffect(() => {
        axios.post(url, body)
            .then(response => {
                // setData(response.data)
            })
    // }, [])

    // return { data }
}
