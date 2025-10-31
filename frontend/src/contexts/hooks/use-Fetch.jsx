import { useState, useEffect, use } from "react";

function useFetch(url){

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)

        fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok")
            }

            return response.json()
        })
        .then((data) => {
            setData(data)
            setLoading(false)
        })
        .catch((error) => {
            setError(error)
            setLoading(false)
        })

    }, [url] /* esto quiere decir que se ejecuta cada vez 
    que la url cambia */)

    return {data, loading, error}
}