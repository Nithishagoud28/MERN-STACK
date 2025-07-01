const express = require("express")
const mongoose = require("mongoose")
const Registeruser = require("./Models/Usermodels")
const app = express();
const jwt = require("jsonwebtoken")
const cors = require("cors")
app.use(express.json())
app.use(cors())
const middleware = require("./Middleware/Middleware")
const Course = require("./Models/Course")
mongoose.connect("mongodb+srv://Nithishagoud:Nithisha%402803@cluster0.lfqldj6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{console.log("DB Connection successfull")})
.catch(()=>{console.log("MongoDB is error")})

app.post("/register",async(req,res)=>{
  try{
    const{username,email,password,confirmpassword}=req.body;
    let existing = await Registeruser.findOne({email:email})
    if(existing){
      return res.status(400).send("user Already exists")

    }
    if(password !== confirmpassword){
      return res.status(400).send("password are not matching");

    }
    let newuser = new Registeruser({
      username,
      email,
      password,
      
    })
    await newuser.save();
    res.status(200).send("Register Successfully")


  }
  catch(err){
    console.log(err)
    return res.status(500).send("internal server error")
  }
})
app.post("/login",async(req,res)=>{
  try{
    const {email,password}= req.body;
    let user = await Registeruser.findOne({email:email})
    if(!user){
      return res.status(400).send("User Not Found")
    }
    if(user.password !== password){
      return res.status(400).send("Invalid Credentials");
    }
    let Payload = {
      user:{
        id : user.id
      }
    }
   jwt.sign(Payload, "jwtsecret", { expiresIn: "7d" }, (err, token) => {
  if (err) throw err;
  return res.json({ token });
})
  }
  catch(err){
    console.log(err);
    return res.status(500).send("server error")
  }
})


app.get("/myprofile",middleware,async(req,res)=>{
try{
  console.log("Request user:",req.user);
   let exist = await Registeruser.findById(req.user.id)
   if(!exist){
    return res.status(400).send("user Not Found")
   }
   res.json(exist);

}
catch(err){
  console.log(err);
  return res.status(500).send("server error")
}
})
app.get("/courses",async(req,res)=>{
  try{
    const courses = await Course.find();
    res.json(courses)
  }
  catch(err){
    console.log(err);
    res.status(500).send("server error")
  }
})

app.listen(5000,()=>{
  console.log("server is running")
})