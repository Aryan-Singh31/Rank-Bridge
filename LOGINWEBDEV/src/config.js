const mongoose = require('mongoose');
const connect=mongoose.connect('mongodb://localhost:27017/RANK-BRIDGE');
connect.then(()=>{
    console.log('database is connnected succesfully');
    
}).catch(()=>{
    console.log('database cannot be conneted');
    
});
const loginSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email: { 
        type: String, 
        required: true, 
        unique: true
      },
      password:{
        type: String,
        required: true
      }
  });
  const collection = mongoose.model('Authentication', loginSchema);
  module.exports=collection;