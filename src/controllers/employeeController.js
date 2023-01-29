const EmployeeModel = require("../models/employeeSchema")
const jwt = require("jsonwebtoken")

const createEmployee= async(req,res)=> {
try{
const data = req.body
const createdData = await EmployeeModel.create(data)
return res.status(201).send({status:true,data:createdData})
}
catch(err){
    return res.status(500).send({status:false, msg : err.message})
}
}

const signIn= async(req, res)=> {
try{
let data = req.body
let {email,password} = data
let employee = await EmployeeModel.findOne({email: email , password:password})
if(!employee)  return res.status(400).send({status:false, message: "Employee does not exist"})
let token= jwt.sign({
    employeeId:employee._id,
    team: "4 members"
   },
    "bonus-developer-task"
    )

return res.status(200).send({message: "Token generated successfully", token : token})
}
catch(err){
    return res.status(500).send({status:false, msg: err.message})
}
}

module.exports.createEmployee= createEmployee
module.exports.signIn = signIn