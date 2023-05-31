const mongoose = require("mongoose")
const contact = mongoose.Schema({

    name: String,
    image: String
})
module.exports = mongoose.model("contact", contact)