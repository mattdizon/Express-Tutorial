const express = require(`express`)
    //middleware for express
const router = express.Router()
const Subscriber = require(`../models/subscriber`)

//Get all subs
router.get(`/`, async(req,res) =>{
    try{
    // await since async method
        const subscribers = await Subscriber.find()
        res.json(subscribers)
    } catch(err){
        //set status so user knows the error
        res.status(500).json({message:err.message})
    }

})
//Get one sub
router.get(`/:id`,(req,res) =>{
    res.send(req.params.id)
})
//Create sub
router.post(`/`,async(req,res) =>{
    const subscriber = new Subscriber({
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel
    })
    try{
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)
    }catch(err){
        // 400 error since it is a user err
        res.status(400).json({message:err.message})

    }
})
//Update sub
router.patch(`/:id`,(req,res) =>{

})
//Delete Sub
router.delete(`/:id`,(req,res) =>{
    req.params.id
})
module.exports = router
