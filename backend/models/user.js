import mongoose from "mongoose";
import validator from "validator";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const userSchema=new mongoose.Schema({
    name:{type:String,
    required:true,
},
email:{
    type:String,
    required:[true,"Please provide your email"],
    validate:[validator.isEmail,"Plesas provide valid email"]
},
phone:{
    type:Number,
    required:[true,"please provide the phone number"]
},
password:{
    type:String,
    required:[true,"please provide your password"],
    select:false
},
role:{
    type:String,
    required:true,
    enum:["Job Seeker","Employer"]
}



},{timestamps:true}
);

//hashing the password
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});
//comparing the password
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };
  
//jwt token
userSchema.methods.getJWTToken=function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRE
    })
}

export const User=mongoose.model('User',userSchema)