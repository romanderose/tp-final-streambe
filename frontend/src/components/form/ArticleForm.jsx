import { useState } from "react";
import '../../styles/components/ArticleForm.css'

function ArticleForm() {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const newArticle = {
            name,
            price: parseFloat(price)   
        }

        const formData = new FormData()
        formData.append("name_article", name_article)
        formData.append("price", price)
        formData.append("image", image)

        try {
            const response = await fetch("http://localhost:3000/articles", {
                method: "POST",
                headers: {
                    "Content-Type" : "multipart/form-data"
                },
                body: formData
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
        <div id="af-container">
            <form id="articleForm" onSubmit={handleSubmit}>
                <h2>🛒Publicar nuevo artículo👕</h2>

                <li className="form-item">
                    <label htmlFor="name">Nombre: </label>
                    
                    <input type="text" value={name} 
                    onChange={(e) => setName(e.target.value)}/>
                </li>

                <li className="form-item">
                    <label htmlFor="price">Precio: </label>
                    
                    <input type="number" value={price} 
                    onChange={(e) => setPrice(e.target.value)}/>  
                </li>

                <li className="form-item">
                    <input type="file" onChange={(e) => 
                        setImage(e.target.files[0])
                    } />
                </li>

                <li className="form-item">
                    <input id="publicar" type="submit" value="Publicar" />
                </li>
                
            </form> 
        </div>
        
    )
}

export default ArticleForm