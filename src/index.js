const express = require("express")
const mongoose = require("mongoose")
const app = express()
app.use(express.json())
const route = require("./routes/routes")

app.use("/", route)

mongoose.set("strictQuery", true)
mongoose.connect("mongodb+srv://nishant55:1234@nishant99.et97kst.mongodb.net/backend-developer-task", {
    useNewUrlParser:true
}).then(()=> console.log("CONNECTED TO MONGO"))
.catch(err=> console.log(err))

app.listen(process.env.PORT || 3000, ()=> {
    console.log(`SERVER IS RUNNING ON PORT ${process.env.PORT||3000}`)
})