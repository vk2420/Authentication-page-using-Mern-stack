const mongoose = require('mongoose');
const connectDB =async() =>{
   try{
    await mongoose.connect('mongodb://127.0.0.1:27017/mydatabase');     //here we mentioned about the link now we are using local host 
    console.log('connected to mongodb')
   }
    catch{
        console.log(error)
    }
}

module.exports = connectDB;