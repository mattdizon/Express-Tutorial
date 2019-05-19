
// load express module which returns a function
// dont forget to use nodemon when running server
const express = require('express')
//express return value is object of type express
const app = express()
let personRoute = require(`./routes/person`)
let path = require(`path`)

//we need to link mongoose
const mongoose = require('mongoose')
//connect mongoose to db
mongoose.connect('mongodb://localhost/subs',{useNewUrlParser:true})
// order of handlers added matters
// we want to print incoming req first to catch everything coming in
//middleware func take 3 param req, res, next
//next is ref to next function in pipeline
app.use((req,res,next) =>{
    console.log(`${new Date().toString()} => ${req.originalUrl}`);

    next()
})
// these are functions in the pipeline chain
app.use(personRoute)
app.use(express.static('public'))


app.get("/people",(req, resp)=> {
 resp.send(["bob","jim","joe"])
 })

 app.get("/people/:person",(req, resp)=> {
 resp.send(`Hello ${req.params.person}`)
 })

//handler for 404
app.use ((req,res,next) =>{
    res.status(404).send(`Your lost`)
})

//handler for 500
//takes 4 param
app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.sendFile(path.join(__dirname, `../public/500.html`))
})






// app.post()
// app.put()
// app.delete()

//get takes to arg path or url and callback function
// allback is function called when get request to endpoint

//call back should have 2 arg: request and response

//this whole block is how we define a route
// app.get("/",(req, resp)=> {
// resp.send("Hello World!!!")
// })
//
// app.get('/api/courses', (req, resp) =>{
//     resp.send([1,2,3])
// })
//
// //route parameters
// app.get('/api/courses/:id', (req, resp) =>{
//     resp.send(req.params.id);
// })


// environment variable value is set outside of application
const port = process.env.PORT || 3000
app.listen(port, ()=> console.log(`Listen on ${port}`))
