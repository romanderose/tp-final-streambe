import { Link } from "react-router-dom"
import { useArticles } from "../contexts/ArticlesContext"
import API_BASE_URL from "../config/api"

function Tienda() {

    const { articles } = useArticles()

    return (
        <>
            {articles.length === 0 ? (
                <p>Cargando artículos...</p>
            ) : (
                articles.map(article => (
                    <div key={article.id}>
                        <Link to={`/detalles/${article.id}`}>
                            {console.log("IMAGE: ", article.imageUrl)}
                            <img 
                                className="img-detalle"
                                src={`${API_BASE_URL}/${article.imageUrl}`}
                                alt={article.name_article} 
                            />

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