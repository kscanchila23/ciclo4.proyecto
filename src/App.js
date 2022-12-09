
import './App.css'
import  Barra  from './componentes/Barra';

//import { Registro } from './componentes/Registro';
import Register from './componentes/auth/register';
import { Tabla } from './componentes/Tabla';
import { Route, Routes, useLocation } from "react-router-dom"
import Login from './componentes/auth/login';
import Envio from './componentes/envios/envio1';
import EnvioEdit from './componentes/envios/envio-edit';
import EnvioNew from './componentes/envios/envio-new';
import { useState } from 'react';
import Guard from './componentes/auth/guard';
import { useEffect } from 'react';
import { Rxse } from './componentes/Rxse';




function App() {
  const [user, setUser] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (localStorage.getItem('user_id')) {
      setUser(true)
    } else {
      setUser(false)
    }
  }, [location])
  
  return (
    
    


   //<Barra/>
   <div className="App">
    
    <Barra userProps={user}/>

      <Routes>
          <Route path="/register" element={<Register />} />

          <Route path="/login" element={<Login />} />    

          <Route 
          path="/Tabla" 
          element={
           <Guard isAllowed={user}>
             <Tabla />            
           </Guard> } />        

          <Route 
          path="/envio/:id" 
          element={
           <Guard isAllowed={user}>
             <Envio />
           </Guard> } />
          
          <Route 
          path="/envio/:id/edit" 
          element={
            <Guard  isAllowed={user}>
              <EnvioEdit/>
            </Guard> } />

          <Route 
          path="/envio/new" 
          element={
          <Guard isAllowed={user}>
            <EnvioNew />
          </Guard>} />

      </Routes>
      <Rxse/>
      
   </div>
  
 


 
 
   )
 }
 
 export default App;
