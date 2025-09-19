import { useParams } from "react-router-dom"

function Detalles() {

    const { id } = useParams()

    return(
        <div>
            <h1>Detalles del artículo</h1>

            <p>ID: { id }</p>
        </div>
    )
} 

export default Detalles