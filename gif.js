const mongoose = require('mongoose')

const gifSchema = new mongoose.Schema({
    gifNum:{type:Number, require:true},
    contents:{type:String, require:true}
})

const Gif = mongoose.model('Gif',gifSchema)

module.exports = Gif