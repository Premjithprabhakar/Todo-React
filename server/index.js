import express from "express"
import cors from "cors"
import Connection from './database/db.js'
import route from './routes/routes.js'
import bodyParser from "body-parser"

const app=express()

app.use(cors())
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))

app.use('/',route)

const PORT=8000

Connection();
app.listen(PORT,()=>console.log("your server started at 8000"));

