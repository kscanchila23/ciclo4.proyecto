import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react"
import axios from "axios"


const labels =  [
  "Numero",
  "Fecha",
  "Ciudad",
  "Direccion",
  "Estado",
  "Action"
]

export const Tabla = () => {
  const[envios, setEnvios] = useState(null)
  const[update, setUpdate]= useState(false)

  useEffect(()=>{
      //const userId="638fa81c67d97fc9b9d17f91"
      const userId = localStorage.getItem('user_id')
      axios
        .get("http://localhost:5000/envios?userId=" + userId)
        .then(result=>{
            console.log(result)
            setEnvios(result.data)
        })
  },[update])

  const handleDeleteClick = ( envioId) =>{
     //aqui va delete 
     console.log('delete',envioId)
     axios
     .delete("http://localhost:5000/envios/delete/"+ envioId)
     .then(response=> {
      console.log(response.data)
      setUpdate(!update)
     })
  }
  return (
    <nav className='tabla'>
      <Link className="btn btn-primary" to='/envio/new'>Nuevo</Link>

      <table className="table">
        <thead>
          <tr>
            {labels.map((label, index) => {
              return <th key={index} scope="col">{label}</th>

            })}                     
                      
          </tr>
        </thead>
        <tbody>
          {envios !== null ? envios.map((envios, index) => {
            
            return (
            <tr key={index}>
              <th scope="row">
                <Link to={'/envio/' + envios._id}>{index}</Link>
              </th>
              <td>{envios.Fecha}</td>
              <td>{envios.Ciudad}</td>
              <td>{envios.Direccion}</td>
              <td>{envios.Estado}</td>
              <td className="d-flex gap-2 justify-content-center" >              
                <Link className="btn btn-success" to={'/envio/' + envios._id +  '/edit'}>Editar</Link>
                <a className="btn btn-danger" onClick={()=> handleDeleteClick(envios._id)} >Eliminar</a>            
              </td>
              
            </tr>)
          } ):''}
          
          
        </tbody>
      </table>
 </nav>
  )
}
