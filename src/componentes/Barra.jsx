import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"


const Barra = ({ userProps }) => {
    const [user, setUser] = useState(false)

    useEffect(() => {
        console.log(userProps)
        setUser(userProps)
    })

    const logOut = () => {
        localStorage.removeItem('user_id')
        setUser(false)
    }
//const Barra = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
 
      <div className="container-fluid">
        <a className="navbar-brand" href='Home'>InstaYA</a>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {user ?  '' :<li className="nav-item">
             <NavLink className='nav-link' to="/login">Iniciar sesion</NavLink>
              
            </li>}
            {user ?  '' :<li className="nav-item">
            <NavLink className='nav-link' to="/register">Registro</NavLink>
            </li>}
            {user ? <li className="nav-item">
            <NavLink className='nav-link ' to="/Tabla">Envios</NavLink>
            </li>:''}
            {user ? <li className="nav-item">
            <NavLink className='nav-link ' 
            to="/Tabla" 
            onClick={() => logOut()}>logOut</NavLink>
            </li>:''}
            
            
            
          </ul>
          
          
          
        </div>
      </div>
 
 </nav>
  )
}
export default Barra
