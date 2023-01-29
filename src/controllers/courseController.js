const CourseModel = require("../models/courseSchema")

const createCourse = async (req, res)=> {
    try{
    const data = req.body
    const createdData = await CourseModel.create(data)
    console.log(data)
    return res.status(201).send({status: true, data: createdData})
    } 
    catch(err){
        return res.status(500).send({status:false, msg : err.message})
    }
}

module.exports.createCourse= createCourse