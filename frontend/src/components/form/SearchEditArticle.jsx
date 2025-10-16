import React, { useState } from "react"
import API_BASE_URL from "../../config/api"

function SearchEditArticle() {
    const [id, setId] = useState("")
    const [article, setArticle] = useState(null)
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")

    const searchHandler = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/articles/${id}`)

            if (!response.ok) {
                console.log("RESPONSE" ,response)

                throw new Error("Artículo no encontrado")
            }

            const data = await response.json()

            console.log("DATA", data.data)

            setArticle(data.data)

            setError("")

            setMessage("")

        } catch (error) {
            console.log("ERROR ", error)
            setMessage("")
            setError(error)
        }
    }

    const editHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API_BASE_URL}/articles/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(article)
            });
            console.log("EDIT RESPONSE", response)

            if (!response.ok) {
                throw new Error("Error al actualizar el artículo");
            }

            const data = await response.json()

            setMessage("Artículo actualizado con éxito");
            setError("");

            console.log("Respuesta del servidor ", data)
        } catch (err) {
            console.log(er)
            setError(err.message);
            setMessage("");
        }
    };

    return(
        <>
            <div>
                <h2>Buscar y editar artículo</h2>
                <input 
                    type="text"
                    placeholder="id del artículo"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />

                <button onClick={searchHandler}>Buscar</button>

                {error && <p style={{color: "red"}}>{error.message}</p>}
                {message && <p style={{color: "green"}}>{message}</p>}

                {article && (
                    <form onSubmit={editHandler}>
                        <h3>Editar Artículo</h3>

                        <label htmlFor="name">Nombre</label>
                        <input 
                            type="text"
                            value={article.name}
                            onChange={(e) => {
                                setArticle({...article, name: e.target.value})
                            }}
                        />

                        <label htmlFor="price">Precio</label>
                        <input 
                            type="text"
                            value={article.price}
                            onChange={(e) => {
                                setArticle({...article, price: e.target.value})
                            }}
                        />

                        <input type="submit" value="Guardar cambios" />
                    </form>
                )}
            </div>
        </>
    )
}

export default SearchEditArticle