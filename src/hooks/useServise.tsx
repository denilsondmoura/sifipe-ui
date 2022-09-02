import axios from "axios";
import { useState, useEffect } from "react";

export function useGet<T = unknown>(url: string) {
    const [data, setData] = useState<T | null>(null)

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setData(response.data)
            })
    }, [])

    return { data }
}

export function usePost<T = unknown>(url: string, body: any) {
    const [data, setData] = useState<T | null>(null)

    useEffect(() => {
        axios.post(url, body)
            .then(response => {
                setData(response.data)
            })
    }, [])

    return { data }
}