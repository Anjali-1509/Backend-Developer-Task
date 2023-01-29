const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({
   title: {
    type:String
   },
   description: String,
   videoUrl : String,
   topics:[String],
   duration : String,
   category : String
})

module.exports = mongoose.model("Course", courseSchema)