const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/LoginSignup")
.then(()=>{
    console.log("monodb Connected");
})
.catch(()=>{
    console.log("failed Connection");
})

const LogInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true 
    }
})

const collection=new mongoose.model("collection1",LogInSchema);

module.exports=collection