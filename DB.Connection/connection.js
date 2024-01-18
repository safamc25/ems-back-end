// import mongoose

const mongoose=require('mongoose')

const connectionString=process.env.DATABASE

// using mongoose connect 

mongoose.connect(connectionString,{
    useUnifiedTopology:true,
    useNewUrlParser: true
}).then((data)=>{
    console.log("Mongo db atlas connected to ems server");
}).catch((err)=>{
    console.log("Mongo db connection failed");
})