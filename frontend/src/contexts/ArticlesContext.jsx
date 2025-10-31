/*Para tener acceso en todo momento a los
artículos traídos de la base de datos con un solo fetch */

import { createContext, useContext, useEffect, useState } from "react"
import API_BASE_URL from "../config/api"

const ArticlesContext = createContext()

// Hook personalizado para usar el contexto
export const useArticles = () => useContext(ArticlesContext)

export function ArticlesProvider({ children }) {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`${API_BASE_URL}/articles`, {
            method: "GET",
            headers: { "Content": "application/json" }
        })
        .then(res => res.json())
        .then(data => {
            setArticles(data)
            setLoading(false)
        })
        .catch(err => {
            console.error("Error al traer artículos:", err)
            setLoading(false)
        })
    }, [])

    return (
        <ArticlesContext.Provider value={{ articles, loading }}>
            {children}
        </ArticlesContext.Provider>
    )
}

