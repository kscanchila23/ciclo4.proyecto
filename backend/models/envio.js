const mongoose = require('mongoose')
const Schema = mongoose.Schema

let envioSchema =  new Schema ({
    Fecha: {
        type: Date,
        required: true,
    },
    Ciudad: {
        type: String,
        required: true,
    },
    Direccion: {
        type: String,
        required: true,
    },
    Estado: {
        type: String,
        required: true,
    },
    Nombre1:{
        type:String,
        required: true,
    },
    Identificacion1:{
        type:String,
        required: true,
    },
    Dimensiones:{
        type:String,
        required: true,
    },
    Destino:{
        type:String,
        required: true,
    },
    
    Nombre2:{
        type:String,
        required: true,
    },
    Identificacion2:{
        type:String,
        required: true,
    },
    
},{
    collection: 'envios'
})
module.exports = mongoose.model('envio',envioSchema)