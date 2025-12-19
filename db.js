const mongoose = require('mongoose');

const connectDB=async()=>{
    try{
        await mongose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected');
    }catch(err){
        console.error("Mongo connection error: ",err);
    }
}
module.exports = connectDB;