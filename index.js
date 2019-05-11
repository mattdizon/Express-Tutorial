// load express module which returns a function
// dont forget to use nodemon when running server
const express = require('express')
//express return value is object of type express
const app = express()
// app.post()
// app.put()
// app.delete()

//get takes to arg path or url and callback function
// allback is function called when get request to endpoint

//call back should have 2 arg: request and response

//this whole block is how we define a route
app.get("/",(req, resp)=> {
resp.send("Hello World!!!")
})
app.get('/api/courses', (req, resp) =>{
    resp.send([1,2,3])
})
app.listen(3000, ()=> console.log("listening on port 3000"))
