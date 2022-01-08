const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cheeseSchema = new Schema({
    image: String,
    countryOfOrigin: String,
    name: String
})

const Cheese = mongoose.model("Cheese", cheeseSchema)

module.exports = Cheese