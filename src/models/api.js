const mongoose = require("mongoose");

const appSchema = new mongoose.Schema({
    Age:{
        type:Number,
        required:true,

    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    id:{
        type:Number,
        required:true,
        unique:true
    }
})

const BasicApp = new mongoose.model("BasicApp",appSchema)

module.exports = BasicApp;