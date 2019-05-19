const mongoose = require(`mongoose`)
//create a schema takes in a js obj which has keys for diff propeties for the object
const subscriberSchema = new mongoose.Schema({
    //define the dif properties for schema
    name:{
        type: String,
        required: true
    },
    subscribedToChannel:{
        type: String,
        required: true
    },
    subscriberDate:{
        type: String,
        required: true,
        default: Date.now
    }
})
//model function takes 2 propeties the name of model and the name of the schema
module.exports = mongoose.model(`Subscriber`, subscriberSchema)
