import React from 'react'
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

export const Rxse = ({ userProps }) => {
  const [user, setUser] = useState(false)

  useEffect(() => {
      console.log(userProps)
      setUser(userProps)
  })

  const logOut = () => {
      localStorage.removeItem('user_id')
      setUser(false)
  }
  return (
    <div className='inicio'>
      <h1>Bienvenido</h1>
      {user ?  '' :<label>
        Para hacer tu envios con nosotros inicia sesion
        </label>}
      {user ?  '' :<div className='send2'>
        <Link className='nav-link' to="/login">Iniciar sesion</Link>
              
      </div>}
      {user ? '':  <div className='send2'>
        <Link className='nav-link' to="/Tabla">Envios</Link>
              
      </div>}
      {user ? <div className='send2'>
        <Link className='nav-link' to="/login" 
        onClick={() => logOut()}>Log out</Link>
              
      </div>:''}
    </div>
  )
}

