 const express = require('express');
 const app=express();
 const mongoose = require('mongoose');
 const morgan=require('morgan');
 const cors=require('cors');
const router=require('./router');
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use('/api',router);
app.listen(2009,()=>{
console.log("local hostconneted");
});
mongoose.connect('mongodb://localhost:27017/matrimonyvj',{useNewUrlParser: true, useUnifiedTopology: true },(err)=>{
console.log("db connected succesfully");
});

