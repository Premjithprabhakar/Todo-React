import mongoose  from "mongoose";

const TodoSchema=new mongoose.Schema({
    data:{
        type:String,
        required:true
    },
    done:{
        type:Boolean,
        default:false
    },
    createAt:{
        type:Date,
        default:Date.now
    },


})

const User=mongoose.model('User',TodoSchema)


export default User