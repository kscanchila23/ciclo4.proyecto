import EnvioForm from "./envio-form"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import dateFormat from "dateformat"



const EnvioEdit = ()=>{
    const {id} =useParams()
    const[envio,setEnvio]=useState(null)

    useEffect(()=> {
        axios
             .get("http://localhost:5000/envios/" + id)
             .then(response =>{
                console.log(response.data)
                const Fecha = response.data.Fecha
                //console.log(new Date())
                response.data['Fecha'] = dateFormat(Fecha,"yyyy-mm-dd")

                setEnvio(response.data)
             })
    },[])

    return(
        <>
            {envio? (
            <>
            <h1>Esto es edicion del envio</h1>
            <label>{id}</label>
            <EnvioForm data={envio} envioId={id}/>
            </>
            ):''}
            
        </>
    )
}
export default EnvioEdit