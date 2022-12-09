import mongoose from 'mongoose'

export const Connection=()=>{

    mongoose.connect('mongodb://localhost:27017/todo',{useNewUrlParser:true});
    
    mongoose.connection.on('connected',()=>{
        console.log("database connected sucssesfully");
    })
    mongoose.connection.on('disconnected',()=>{
        console.log("database disconnected");
    })
    mongoose.connection.on('error',()=>{
        console.log("Error while connecting with the database",error.message);
    })

}
export default Connection


