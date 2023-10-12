const e = require('express');
const mongoose = require('mongoose');

uri = "mongodb+srv://zaynab123:<zaynab@123>@cluster0.mi1e5hp.mongodb.net/"

const connectDB =()=>{
    return mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });
};

module.exports = connectDB;