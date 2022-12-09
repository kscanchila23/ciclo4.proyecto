import {useForm} from "react-hook-form"
import { useEffect, useState } from "react"
import axios from "axios"

const EnvioForm = ({ data, envioId })=>{
    const [isEdit, setIsEdit ] = useState(false)

    const { register, formState: { errors }, handleSubmit, setValue} = useForm();
    const customSubmit = (dataForm)=> {
        const envioObject={
            Fecha: dataForm.Fecha,                
            Ciudad:dataForm.city,
            Direccion:dataForm.dire,
            Estado:dataForm.estado,
            Nombre1:dataForm.nombreenvia,
            Identificacion1:dataForm.identificacionenvia,
            Dimensiones:dataForm.dimensiones,
            Destino:dataForm.destino,
            Nombre2:dataForm.nombrerecibe,
            Identificacion2:dataForm.identificacionrecibe,
            userId: localStorage.getItem('user_id')
            //userId:"638faa0967d97fc9b9d17f92"
            

        }
        if(isEdit){
            axios
                .put("http://localhost:5000/envios/edit/"+ envioId,envioObject)
                .then(response=> console.log(response.data))
            
        } else{
            console.log('create logic')
            
            axios
                .post("http://localhost:5000/envios/create", envioObject)
                .then(response => console.log (response.data))
        }
        
    } 
    
    useEffect(()=> {
        console.log(data)
        if (data.length !== 0){
            setIsEdit(true)
            setValue('Fecha',data.Fecha)
            setValue('city',data.Ciudad)
            setValue('dire',data.Direccion)
            setValue('nombreenvia',data.Nombre1)
            setValue('identificacionenvia',data.Identificacion1)
            setValue('nombrerecibe',data.Nombre2)
            setValue('identificacionrecibe',data.Identificacion2)
            setValue('dimensiones',data.Dimensiones)
            setValue('destino',data.Destino)
        }

    },[])
    
    return(
        <form className="principal" onSubmit={handleSubmit(customSubmit)}>
        
          <div className="contenedor1">
            <div className="columna1">
                <div>
                <label>Fecha :</label>    
                <input type='date' {...register("Fecha", { required: true,maxLength:15,   })} 
                 aria-invalid={errors.Fecha ? "true" : "false"} ></input>
                 {errors.Fecha && <p>Error, maximo 15 caracteres</p>}
                </div>
                <div>
                <label>Lugar de recogida:</label>    
                <input {...register("dire", { required: true,maxLength:15,  })} 
                 aria-invalid={errors.dire ? "true" : "false"} ></input>
                 {errors.dire && <p>Error, maximo 15 caracteres</p>}
                </div>
                <div>
                <label>Nombre de quien envia:</label>    
                <input {...register("nombreenvia", { required: true,maxLength:15,  })} 
                 aria-invalid={errors.nombreenvia ? "true" : "false"}></input>
                </div>
                <div>
                <label>Numero de idenficacion:</label>    
                <input {...register("identificacionenvia", { required: true,maxLength:15,  })} 
                 aria-invalid={errors.identificacion ? "true" : "false"}></input>
                </div>
                
                
            </div>
            <div className="columna2">
                <div>
                <label>Dimensiones del paquete:</label>    
                <input {...register("dimensiones", { required: true,maxLength:15,  })} 
                 aria-invalid={errors.dimensiones ? "true" : "false"}></input>
                </div>
                <div>
                <label>Destino:</label>    
                <input {...register("destino", { required: true,maxLength:15,  })} 
                 aria-invalid={errors.destino ? "true" : "false"}></input>
                </div>
                <div>
                <label>Ciudad:</label>    
                <input {...register("city", { required: true,maxLength:15,  })} 
                 aria-invalid={errors.city ? "true" : "false"} ></input>
                 {errors.city && <p>Error, maximo 15 caracteres</p>}
                </div>
                <div>
                <label>Nombre de quien recibe:</label>    
                <input {...register("nombrerecibe", { required: true,maxLength:15,  })} 
                 aria-invalid={errors.nombrerecibe ? "true" : "false"}></input>
                </div>
                <div>
                <label>Numero de identificacion:</label>    
                <input {...register("identificacionrecibe", { required: true,maxLength:15,  })} 
                 aria-invalid={errors.identificacionrecibe ? "true" : "false"}></input>
                </div>
            </div>
            
          </div>
          <div >
            <label  >Estado:</label>
            <select name="select" {...register("estado", { required: true })}
                        aria-invalid={errors.estado ? "true" : "false"}>
                <option value="Guardada">Guardada</option>
                <option value="Cancelada">Cancelada</option>
                
            </select>
            <input  type="submit" value={isEdit ? "Edit" : "Create"} />

          </div>
              
                                              
           
        </form>
    )
}

export default EnvioForm