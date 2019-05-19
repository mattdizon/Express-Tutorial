const express = require(`express`)
    //middleware for express
const router = express.Router()
const Subscriber = require(`../models/subscriber`)

//Get all subs
router.get(`/`,(req,res) =>{
    res.send("hello world")
})
//Get one sub
router.get(`/:id`,(req,res) =>{
    res.send(req.params.id)
})
//Create sub
router.post(`/`,(req,res) =>{
    req.params.id
})
//Update sub
router.patch(`/:id`,(req,res) =>{

})
//Delete Sub
router.delete(`/:id`,(req,res) =>{
    req.params.id
})
module.exports = router
