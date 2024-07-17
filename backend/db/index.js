const mongoose = require("mongoose");
const Schema = mongoose.Schema;
try{
      mongoose.connect("mongodb://localhost:27017/test");
}catch(e){
      console.log("Mongodb connection error");
}


const userSchema = new mongoose.Schema({
      username:{
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            maxLength: 30,
            minLength: 5
      },
      password:{
            type: String,
            required: true,
            minLength: 6        
      },
      firstName:{
            type: String,
            required: true,
            trim: true,
            maxLength: 50
      },
      lastName:{
            type: String,
            required: true,
            trim: true,
            maxLength: 50
      }
})

const accountsSchema = mongoose.Schema({
      userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
      },
      balance: {
            type: Number,
            required: true
      }
})



const User = mongoose.model('user',userSchema);
const Account = mongoose.model('account',accountsSchema);

module.exports = {
      User,
      Account
}