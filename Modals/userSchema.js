const mongoose=require('mongoose')

// import validator after install package
const validator=require('validator')

const userSchema=new mongoose.Schema({
    fname:{
        type:String,
        required:true,
        trim:true
    },
    lname:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validator(value){
            if(!validator.isEmail(value)){
                throw Error('Invalid Email')
            }
        }

    },
    mobile:{
        type:String,
        required:true,
        unique:true,
        minlength:10,
        maxlength:10
    },
    gender:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    profile:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    }

})

// to store schema to mongodb using mongoose
// model name and collection name should needed to be same

    //modelname                collectionname
const users=new mongoose.model('users',userSchema)

// export model
module.exports=users