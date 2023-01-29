const express = require("express")
const router = express.Router()
const {createEmployee,signIn} = require("../controllers/employeeController")
const { createCourse} = require("../controllers/courseController")

router.get("/test", (req, res)=> {
    res.send("hi i am api")
})

router.post("/signup", createEmployee )

router.post("/signIn", signIn)

router.post("/course", createCourse)

router.all('/*',function(req,res){
    res.status(400).send({msg:"invalid Url request"})
})

module.exports= router