import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import API_BASE_URL from "../config/api"

function Tienda() {

    const [articles, setArticles] = useState([])

    useEffect(()=>{
        fetch(`${API_BASE_URL}/articles`, {
            method: "GET",
            headers: {
                "Content-Type" : "application/json"
            }
        })
        .then((res) => res.json())
        .then((data) => {setArticles(data)
            console.log("data articles", data)
        })
        .catch((err) => console.error("Error al traer artículos: ", err))
    }, [])

    return (
        <>
            {articles.length === 0 ? (
                <p>Cargando artículos...</p>
            ) : (
                articles.map(article => (
                    <div key={article.id}>
                        <Link to={`/detalles/${article.id}`}>
                            <h2>{article.name_article}</h2>
                            <p>Ver detalles:</p>
                        </Link>
                    </div>
                ))
            )}
        </>
    )

}
 
export default Tienda