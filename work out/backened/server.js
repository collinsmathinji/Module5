const express=require('express')
const CORS=require('cors')
require('dotenv').config()
const workoutroutes=require('./routes/workout')
const { default: mongoose } = require('mongoose')
const app=express()
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method),
    next()
})
app.use(CORS())
app.use('/api/workouts',workoutroutes)
mongoose.connect(process.env.Mongo_URL)
  .then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("Connected to MongoDb & listening to port",process.env.PORT)
    })
  })
  .catch((err)=>{
   console.log(err)
  })

process.env