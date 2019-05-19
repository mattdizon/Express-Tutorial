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
router.get(`/:id`,getSubscriber,(req,res) =>{
    res.json(res.subscriber)
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
router.patch(`/:id`,getSubscriber,async(req,res) =>{
    if(req.body.name != null){
        res.subscriber.name = req.body.name
    }
    if(req.body.subscribedToChannel != null){
        res.subscriber.subscribedToChannel = req.body.subscribedToChannel
    }
    try {
        const updatedSubscriber = await res.subscriber.save()
        res.json(updatedSubscriber)
    } catch (e) {
        res.status(400).json({message: e.message})

    }

})
//Delete Sub
router.delete(`/:id`,getSubscriber, async (req,res) =>{
    try {
        await res.subscriber.remove()
        res.json({message: 'Deleted User'})
    } catch (e) {
        res.status(500).json({message: e.message})
    }
})

// crete a middleware function to get subcriber for the id functions
async function getSubscriber(req, res, next){
    let subscriber
    try {
        subscriber = await Subscriber.findById(req.params.id)
        if(subscriber == null)
        return res.status(404).json({message:'user not found'})
    } catch (e) {
        return res.status(500).json({message:e.message})
    }
    res.subscriber = subscriber
    next()
}
module.exports = router
