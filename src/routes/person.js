let express = require('express')
let router = express.Router()


//QueryStrig a query property on request obj
router.get('/person', (req,res) => {
    if(req.query.name){
        res.send(`hiiii!! ${req.query.name} bill`)
    }
    else{
        res.send(`hiiii!!`)
    }
})

router.get('/person/:name', (req,res) => {
    res.send(`hiiii!! ${req.params.name}`)
})

router.get('/error',(req,res)=>{
    throw new Error('Forced Error')
})

module.exports = router
