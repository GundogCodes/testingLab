require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 3000
const Gif = require('./gif')

mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', ()=> {
    console.log('connected to mongoDB')
})

app.use(express.json())

app.get('/', (req,res)=>{
    res.send('<h1>Hello World</h1>')
})



//INDEX
app.get('/gifs', async (req,res)=>{
    try {
        const foundGifs = await Gif.find({})
        res.json({foundGifs})
    } catch (error) {
        res.status(400).send({message: error.message})
    }
})
//NEW
//DELETE
app.delete('/gifs/:id', async (req,res)=>{
    try {
        await Gif.findOneAndDelete({'_id':req.params.id})
        res.redirect('/gifs')
    } catch (error) {
        res.status(400).send({message: error.message})
    }
})
//UPDATE
app.put('/gifs/:id', async (req,res)=>{
    try {
        await Gif.findOneAndUpdate({'_id':req.params.id},req.body,{new:true})
        res.json({})
    
    } catch (error) {
        res.status(400).send({message: error.message})
    }
})
//CREATE
app.post('/gifs/new', async (req,res)=>{
    try {
        const createGif = await Gif.create(req.body)
        res.json({createGif})
    } catch (error) {
        res.status(400).send({message: error.message})
    }
})
//EDIT
//SHOW
app.get('/gifs/:id', async (req,res)=>{
    try {
        const foundGif = await Gif.findOne({'_id':req.params.id})
        res.json({foundGif})
    } catch (error) {
        res.status(400).send({message: error.message})
    }
})


app.listen(PORT, ()=>{
    console.log(`Yo we listening on ${PORT} homie`)
})
