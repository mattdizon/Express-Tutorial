// load express module which returns a function
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
resp.send("Hello World")
})
app.listen(3000, ()=> console.log("listening on port 3000"))
