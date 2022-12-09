let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

  let envioSchema = require('../models/envio'); 
//CRUD

//Create
//localhost:5000/envios/create
router.route('/create').post((req, res ,next)=>{
    envioSchema.create(req.body, (error, data)=>{
        if (error){
            return next (error)

        }else {
            res.json(data)
        }
    })

})

// read envios //pendiente al query user
//localhost:5000/envios?userId=1234
router.route('/').get((req,res,next) =>{
    envioSchema.find({ userId: req.query.userId},(error,data)=> {
        if (error) {
            return next (error)
        } else {
            res.json(data)
        }
    })
})
//localhost:5000/envios/1
router.route('/:id').get((req,res,next) =>{
    envioSchema.findById(req.params.id,(error,data) => {
        if (error) {
            return next (error)
        } else {
            res.json(data)
        }
    })
})

//update envios
//localhost:5000/envios/edit/2

router.route('/edit/:id').put((req, res, next) => {
    envioSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log('updated successfully !')
            res.json(data)
        }
    })
})

//envios
//localhost:5000/envios/delete/2

router.route('/delete/:id').delete((req, res, next) => {
    envioSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json({
                message: data
            })
        }
    })
})

module.exports= router