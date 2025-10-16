import { useState } from "react";

function ArticleForm() {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        const newArticle = {
            name,
            price: parseFloat(price)   
        }

        try {
            const response = await fetch("http://localhost:3000/articles", {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(newArticle)
            })

            const data = await response.json()

            console.log("Respuesta del server: " + data)
            alert("Artículo publicado correctamente ✅")

            setName()
            setPrice()

        } catch (error) {
            console.log("Error: " + error)
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Publicar nuevo artículo</h2>

            <label htmlFor="name">Nombre:</label>
                
            <input type="text" value={name} 
            onChange={(e) => setName(e.target.value)}/>

            <label htmlFor="price">Precio:</label>
                
            <input type="number" value={price} 
            onChange={(e) => setPrice(e.target.value)}/>

            <input type="submit" value="Publicar" />
        </form>
    )
}

export default ArticleForm