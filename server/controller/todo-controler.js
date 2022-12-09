// import express from 'express'
import User from '../model/Todo.js'

export const addTodo= async(req,res)=>{
try{  
    const newTodo= await  User.create({
        data:req.body.data,
        createAt:Date.now()
    })
    await newTodo.save()
  return  res.status(200).json(newTodo)
}catch(error){
    return res.status(500).json(error.message)
}
}

export const getAllTodos=async(req,res)=>{
    try{  
       
    const todos=await User.find({}).sort({'createAt':-1})
    return  res.status(200).json(todos)
    }catch(error){
        return res.status(500).json(error.message)
    }
    
}


export const toggleTodoDone=async(req,res)=>{
    try{  
    const todoRef =await User.findById(req.params.id)
    const todo=await User.findOneAndUpdate(
        {_id:req.params.id},
        {done:!todoRef.done}
    )
    await todo.save()
    return  res.status(200).json(todo)
    }catch(error){
        return res.status(500).json(error.message)
    }
    
}


export const updateTodo=async(req,res)=>{
    try{  
    await User.findOneAndUpdate(
        {_id:req.params.id},
        {data:req.body.data}
    )
    const todo=  await User.findById(req.params.id)  
    return  res.status(200).json(todo)
    }catch(error){
        return res.status(500).json(error.message)
    }
    
}



export const deleteTodo=async(req,res)=>{
    try{  
    const todo=  await User.findByIdAndDelete(req.params.id)
    return  res.status(200).json(todo)
    }catch(error){
        return res.status(500).json(error.message)
    }
    
}





