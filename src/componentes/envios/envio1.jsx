import { useParams } from "react-router-dom"

const Envio = () => {
    const {id}= useParams()
    return (
        <di>
            <h1>#{id} envio </h1>
        </di>
        
    )
}
export default Envio